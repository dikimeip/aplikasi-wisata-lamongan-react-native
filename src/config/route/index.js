import { createStackNavigator } from "react-navigation-stack";
import homePage from "../../containers/pages/homePage";
import beritaPage from "../../containers/pages/beritaPage";
import pengaduanPage from '../../containers/pages/pengaduanPage'
import { createSwitchNavigator,createAppContainer } from "react-navigation";
import TentangPage from "../../containers/pages/TentangPage";

const HomePages = createStackNavigator(
    {
        Home : {
            screen : homePage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Home'
    }
)

const BeritaPages = createStackNavigator(
    {
        Berita : {
            screen:beritaPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Berita'
    }
)

const pengaduanPages = createStackNavigator(
    {
        Pengaduan : {
            screen:pengaduanPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Pengaduan'
    }
)

const tentangPages = createStackNavigator(
    {
        Tentang : {
            screen:TentangPage
        }
    },
    {
        headerMode:'none',
        initialRouteName:'Tentang'

    }
)

const SwichRoute = createSwitchNavigator(
    {
        HomePages,
        BeritaPages,
        pengaduanPages,
        tentangPages
    },
    {
        headerMode:'none',
        initialRouteName:'HomePages'
    }
)

export default createAppContainer(SwichRoute)