import {interfaces} from 'inversify';
import {ImagesInterface} from '~/interfaces/Images.interface';

import avatar from '~/assets/images/img-avatar.jpg';
import avatarMini from '~/assets/images/img-avatar-mini.jpg';

export default (ctx: interfaces.Container) => {
  ctx.bind(ImagesInterface).toConstantValue({
    avatar,
    avatarMini,
  });
};
