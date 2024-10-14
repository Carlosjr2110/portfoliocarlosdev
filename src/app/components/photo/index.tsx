import * as C from './style';
import logo from '../../../../public/assets/LogoDev.png'
import photo from '../../../../public/assets/foto2.png';

export const Photo = () => (
  <C.Container>
  <C.Coin>
    <C.Face $front={true}>
      <C.Image src={photo.src} alt="Photo" />
    </C.Face>
    <C.Face>
      <C.Logo src={logo.src} alt="Logo" />
    </C.Face>
  </C.Coin>
</C.Container>
);
