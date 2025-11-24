import prisma from '@/lib/prisma'
import { addSong } from './actions'

export default async function Home() {
  // Mengambil data dari tabel TetoSong
  const songs = await prisma.tetoSong.findMany()

  return (
    <main style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Playlist Teto (SQLite)</h1>
      
      <div style={{ marginBottom: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h3>Add new song</h3>
        <form action={addSong} style={{ display: 'flex', gap: '10px', flexDirection: 'column', maxWidth: '300px' }}>
          <input type="text" name="title" placeholder="Judul Lagu" required style={{ padding: '8px' }} />
          <input type="text" name="author" placeholder="Author/Composer" required style={{ padding: '8px' }} />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#d63031', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Save
          </button>
        </form>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#fab1a0', textAlign: 'left' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Judul Lagu</th>
            <th style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Author</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{song.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{song.title}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{song.author}</td>
            </tr>
          ))}
          {songs.length === 0 && (
            <tr>
              <td colSpan={3} style={{ padding: '20px', textAlign: 'center', color: '#888' }}>
                Belum ada lagu yang ditambahkan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  )
}