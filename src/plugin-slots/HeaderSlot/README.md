# Header Slot

### Slot ID: `org.openedx.frontend.layout.header_learner_dashboard.v1`

### Slot ID Aliases
* `header_slot`

### Props:
* `mainMenuItems`
* `secondaryMenuItems`
* `userMenuItems`

## Description

This slot is used to replace/modify/hide the entire learner dashboard header.

## Example

The following `env.config.jsx` will replace the learner dashboard header entirely.

![Screenshot of custom component](./images/header_custom_component.png)

```js
import { DIRECT_PLUGIN, PLUGIN_OPERATIONS } from '@openedx/frontend-plugin-framework';

const config = {
  pluginSlots: {
    'org.openedx.frontend.layout.header_learner_dashboard.v1': {
      keepDefault: false,
      plugins: [
        {
          op: PLUGIN_OPERATIONS.Insert,
          widget: {
            id: 'custom_header_component',
            type: DIRECT_PLUGIN,
            RenderWidget: ({ mainMenuItems, secondaryMenuItems, userMenuItems }) => (
              <header>
                <nav>
                  {/* Menú Principal */}
                  <ul style={{ listStyle: 'none', display: 'flex', gap: '20px', padding: 0 }}>
                    {mainMenuItems.map((item, index) => (
                      <li key={index}>
                        <a 
                          href={item.href} 
                          style={{ fontWeight: item.isActive ? 'bold' : 'normal' }}
                        >
                          {item.content}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Menú de Usuario (con sub-items) */}
                  <div className="user-menu">
                    {userMenuItems.map((group, groupIndex) => (
                      <div key={groupIndex} className="menu-group">
                        {group.heading && <h5>{group.heading}</h5>}
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {group.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href={item.href}>{item.content}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </nav>
              </header>
            ),
          },
        },
      ]
    }
  },
}

export default config;
```
