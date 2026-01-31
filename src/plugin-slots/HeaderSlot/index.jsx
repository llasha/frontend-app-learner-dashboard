import PropTypes from 'prop-types';
import { PluginSlot } from '@openedx/frontend-plugin-framework';

import Header from '@edx/frontend-component-header';

const HeaderSlot = ({
  mainMenuItems, secondaryMenuItems, userMenuItems,
}) => (
  <PluginSlot
    id="org.openedx.frontend.layout.header_learner_dashboard.v1"
    idAliases={['header_slot']}
    slotOptions={{
      mergeProps: true,
    }}
    pluginProps={{
      mainMenuItems,
      secondaryMenuItems,
      userMenuItems,
    }}
  >
    <Header
      mainMenuItems={mainMenuItems}
      secondaryMenuItems={secondaryMenuItems}
      userMenuItems={userMenuItems}
    />
  </PluginSlot>
);

HeaderSlot.propTypes = {
  mainMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
  secondaryMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
  userMenuItems: PropTypes.arrayOf(PropTypes.shape({})),
};

HeaderSlot.defaultProps = {
  mainMenuItems: [],
  secondaryMenuItems: [],
  userMenuItems: [],
};

export default HeaderSlot;
