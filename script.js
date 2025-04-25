document.getElementById('lyrics-form').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const artist = document.getElementById('artist').value.trim();
    const song = document.getElementById('song').value.trim();
    const lyricsContainer = document.getElementById('lyrics');
  
    lyricsContainer.textContent = 'Loading...';
  
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
      const data = await response.json();
  
      if (data.lyrics) {
        lyricsContainer.textContent = data.lyrics;
      } else {
        lyricsContainer.textContent = 'Lyrics not found!';
      }
    } catch (error) {
      lyricsContainer.textContent = 'Error fetching lyrics.';
    }
  });
  