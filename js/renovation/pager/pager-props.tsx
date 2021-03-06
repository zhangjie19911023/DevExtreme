import { ComponentBindings, OneWay, TwoWay } from 'devextreme-generator/component_declaration/common';
import messageLocalization from '../../localization/message';

@ComponentBindings()
export default class PagerProps {
  // Vitik: Renovation workaround for preact remove all existed element attribute from root node
  @OneWay() elementAttr?: any;

  @OneWay() showInfo?: boolean = false;

  @OneWay() infoText?: string = messageLocalization.getFormatter('dxPager-infoText')();

  @OneWay() lightModeEnabled?: boolean = false;

  @OneWay() maxPagesCount?: number = 10;

  @OneWay() pageCount?: number = 10;

  @OneWay() pagesCountText?: string = messageLocalization.getFormatter('dxPager-pagesCountText')();

  // visible: true,
  // pagesNavigatorVisible: 'auto',
  @TwoWay() pageIndex?: number = 0;

  @TwoWay() pageSize?: number = 5;

  // showPageSizes: true,

  @OneWay() pageSizes?: number[] = [5, 10];

  @OneWay() rtlEnabled?: boolean = false;

  @OneWay() showNavigationButtons?: boolean = false;

  @OneWay() totalCount?: number = 0;

  // hasKnownLastPage: true,
}
