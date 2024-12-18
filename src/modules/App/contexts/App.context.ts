import {interfaces} from 'inversify';
import {ImagesInterface} from '~/interfaces/Images.interface.ts';

import avatar from '~/assets/images/img-avatar.jpg';
import avatarMini from '~/assets/images/img-avatar-mini.jpg';

export const AppContext = (ctx: interfaces.Container) => {
  ctx.bind(ImagesInterface).toConstantValue({
    avatar,
    avatarMini,
  });
};

