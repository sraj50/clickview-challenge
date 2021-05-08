# Folder Structure
1. `client` - frontend UI (React + TypeScript)
2. `api` - backend API (Express + TypeScript)
3. `data` - challenge details

## Client
- Run `yarn install` to install dependencies
- Run `yarn start` to start development server on port 3000

### Implementation Details
- Navbar for video and playlist
- Routing between video and playlist pages

## API
- Run `yarn install` to install dependencies
- Run `yarn start` to run server on port 8000

### Implementation Details
- Setup Express server
- Read file data containing and convert to JSON format
- Routes for video and playlists
  - `http://localhost:8000/video` --> videos route
  - `http://localhost:8000/playlist` --> playlists route
  - `GET` methods for both routes to retrive all videos and playlists
