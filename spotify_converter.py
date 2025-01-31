import re
import requests
import json
import uuid
import os
from pathlib import Path


AUDIO_DIR = Path("public/audio")
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

def extract_track_id(url):
    """Extrait l'ID de la piste depuis une URL Spotify"""
    match = re.search(r'track/([\w-]+)', url)
    if not match:
        raise ValueError("URL Spotify invalide")
    return match.group(1)

def get_preview_url(track_id):
    """Récupère l'URL de prévisualisation depuis la page embed"""
    embed_url = f"https://open.spotify.com/embed/track/{track_id}"
    
    response = requests.get(embed_url)
    response.raise_for_status()
    
    # Trouve le JSON dans la balise script
    json_data = re.search(r'<script id="__NEXT_DATA__".*?>({.*?})</script>', response.text, re.DOTALL)
    if not json_data:
        raise ValueError("JSON introuvable dans la page")
    
    data = json.loads(json_data.group(1))
    
    # Navigue dans la structure JSON pour trouver l'URL
    preview_url = data.get('props', {}).get('pageProps', {}).get('state', {}).get('data', {}).get('entity', {}).get('audioPreview', {}).get('url')
    
    if not preview_url:
        raise ValueError("Aucun lien de prévisualisation trouvé")
    
    return preview_url

def get_existing_songs():
    """Récupère la liste des fichiers audio existants"""
    return [f"audio/{f.name}" for f in AUDIO_DIR.glob("*.mp3")]

def generate_js_snippet(songs):
    """Génère le snippet JavaScript avec la playlist randomisée"""
    return f"""initializeRandomPlaylist() {{
    const songs = {json.dumps(songs, indent=4)};
    this.playlist = songs.sort(() => Math.random() - 0.5);
}}"""

def download_preview(url, filename=None):
    """Télécharge le fichier MP3 de prévisualisation"""
    if not filename:
        filename = f"{uuid.uuid4().hex}.mp3"
    
    filepath = AUDIO_DIR / filename
    
    response = requests.get(url)
    response.raise_for_status()
    
    with open(filepath, 'wb') as f:
        f.write(response.content)
    
    # Met à jour le snippet JS après chaque téléchargement
    all_songs = get_existing_songs()
    js_code = generate_js_snippet(all_songs)
    
    print("\n=== Coller ce code dans votre application ===\n")
    print(js_code)
    print("\n=============================================\n")
    
    return filepath

# Exemple d'utilisation
if __name__ == "__main__":


    while True:
        spotify_url = input("Entrez l'URL Spotify : ").strip()
        
        try:
            # Étape 1: Extraire l'ID
            track_id = extract_track_id(spotify_url)
            print(f"ID de la piste : {track_id}")
            
            # Étape 2: Récupérer l'URL de prévisualisation
            preview_url = get_preview_url(track_id)
            print(f"URL de prévisualisation : {preview_url}")
            
            # Étape 3: Télécharger le MP3
            filename = download_preview(preview_url)
            print(f"Téléchargé avec succès : {filename}")
            
        except Exception as e:
            print(f"Erreur : {str(e)}")