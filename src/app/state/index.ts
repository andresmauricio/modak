import { ArtWorksState } from './artworks/artworks.reduce';
import { UIState } from './ui/ui.reduce';
import { UserState } from './user/user.reduce';

export interface AppState {
  ui: UIState;
  user: UserState;
  artworks: ArtWorksState;
}
