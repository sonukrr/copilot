export interface Nav {
  id: number
  text: string
  link?: string
  logoPath: string
  altText: string
  pageTitle: string
}

export interface Navs{
  options: Nav[],
  selected: Nav | null
}
