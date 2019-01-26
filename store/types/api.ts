export type QueryParams = {
  q?: string,
  id?: number,
  lat?: number,
  lon?: number,
  appid: string
}

export type Coord = {
  lon: number,
  lat: number
}

export type Weather = {
  id: number,
  main: string,
  description: string,
  icon: string
}

export type Measurement = {
  temp: number,
  pressure: number,
  humidity: number,
  temp_min: number,
  temp_max: number,
  sea_level?: number,
  grnd_level?: number
}

export type Wind = {
  speed: number,
  deg: number
}

export type Cloud = {
  all: number
}

export type Volume = {
  '1h'?: number,
  '3h'?: number
}

export type System = {
  type: number,
  id: number,
  message: number,
  country: string,
  sunrise: number,
  sunset: number
}

export type RootResponse = {
  coord: Coord,
  weather: Array<Weather>,
  base: string,
  main: Measurement,
  visibility?: number,
  wind: Wind,
  clouds: Cloud,
  rain: Volume,
  snow: Volume,
  dt: number,
  sys: System,
  id: number,
  name: string,
  code: number
}

export type ApiData = {
  code: number,
  data: any,
  error?: boolean
}
