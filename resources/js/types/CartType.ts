import {Variation} from "./VariationType";

export interface Cart {
  id:         number;
  uuid:       string;
  user_id:    number;
  created_at: Date;
  updated_at: Date;
  variations: Variation[];
}
