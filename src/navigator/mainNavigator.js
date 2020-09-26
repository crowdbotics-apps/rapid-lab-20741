import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList112201Navigator from '../features/NotificationList112201/navigator';
import Settings112200Navigator from '../features/Settings112200/navigator';
import Settings112192Navigator from '../features/Settings112192/navigator';
import UserProfile112190Navigator from '../features/UserProfile112190/navigator';
import ArticleList112152Navigator from '../features/ArticleList112152/navigator';
import ArticleList112151Navigator from '../features/ArticleList112151/navigator';
import ArticleList112150Navigator from '../features/ArticleList112150/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList112201: { screen: NotificationList112201Navigator },
Settings112200: { screen: Settings112200Navigator },
Settings112192: { screen: Settings112192Navigator },
UserProfile112190: { screen: UserProfile112190Navigator },
ArticleList112152: { screen: ArticleList112152Navigator },
ArticleList112151: { screen: ArticleList112151Navigator },
ArticleList112150: { screen: ArticleList112150Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
