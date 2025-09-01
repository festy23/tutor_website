export interface Discipline {
  id: string;
  name: string;
  displayName: string;
}

export interface HeroConfig {
  disciplines: Discipline[];
  animationInterval: number;
  profileImage: string;
  pythonLogo: string;
}
