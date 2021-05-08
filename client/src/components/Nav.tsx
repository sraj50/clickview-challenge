import Nav from "react-bootstrap/Nav"

export const Navbar = () => {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link href="/videos">Videos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/playlists">Playlist</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}
