import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import tabStyles from "./tabStyles";

import CustomTabs from "../../../assets/jss/CustomTabs";

class Tabs extends React.Component {

  render() {
    const { panes, classes } = this.props;
    const tabs = panes.map(pane => (
      { 
        key: pane.id,
        tabName: pane.title,
        tabContent: (
          <p className={classes.textCenter}>
            {pane.content}
          </p>
        )
      }
    ))

    return (
      <div className={classes.spacing}>
        <CustomTabs
          headerColor="success"
          tabs={tabs}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(tabStyles)(Tabs);

