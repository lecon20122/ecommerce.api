export interface City {
  id: number,
  name: string,
  districts : District[]
}

export interface District {
  id: number,
  name: string,
  city_id: number
}
