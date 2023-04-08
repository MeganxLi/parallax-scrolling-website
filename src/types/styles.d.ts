/*--- Variables ---*/
type ColorValue = string | { [key: string | number]: string };

type Colors = {
  [key: string]: ColorValue;
  black: {
    [key: string | number]: string;
    core: string;
  };
};

interface LoadingProps {
  move: number;
}

/*--- Loading ---*/
interface LoadingProps {
  move: number;
}

/*--- Header ---*/
interface HeaderProps {
  active: boolean
}

/*--- Home ---*/
interface CarouselProps {
  color: string
}