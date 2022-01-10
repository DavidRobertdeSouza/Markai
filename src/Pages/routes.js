import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login/login'
import Step1C from './CadastroCliente/Step1c/step1c'
import Step2C from './CadastroCliente/Step2c/step2c'
import Step3C from './CadastroCliente/Step3c/step3c'
import Step4C from './CadastroCliente/Step4c/step4c'
import Step5C from './CadastroCliente/Step5c/step5c'
import Step6C from './CadastroCliente/Step6c/step6c'
import Step7C from './CadastroCliente/Step7c/step7c'
import Step1E from './CadastroEmpresa/Step1e/step1e'
import Step2E from './CadastroEmpresa/Step2e/step2e'
import Step3E from './CadastroEmpresa/Step3e/step3e'
import Step4E from './CadastroEmpresa/Step4e/step4e'
import Step5E from './CadastroEmpresa/Step5e/step5e'
import Step6E from './CadastroEmpresa/Step6e/step6e'
import Step7E from './CadastroEmpresa/Step7e/step7e'
import Step8E from './CadastroEmpresa/Step8e/step8e'
import CadastroCriado from './CadastroCriado/cadastrocriado'
import Termos from './Termos/termos'
import TipoCadastro from './TipoCadastro/tipocadastro'
import Explorar from './Explorar/explorar'
import Home from './Home/home'
import Reserva from './Reserva/reserva'
import Perfil from './Perfil/perfil'
import Mensagem from './Mensagem/mensagem'


export default function Routes() {

const Tab = createBottomTabNavigator()

function MyTabs(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName='Perfil'
      screenOptions={{
        tabBarStyle:{
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: '#8F79BA'
        },
        headerTransparent: true,
        headerTitle: ''
      }}
      >
        <Tab.Screen 
        name='Mensagem'
        component={Mensagem} 
        options={{
          tabBarInactiveTintColor: '#FFF',
          tabBarActiveTintColor: '#583b90',
          headerStyle:{
            backgroundColor: '#8F79BA',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            marginLeft: 40
          },
          tabBarIcon:({focused}) => (
            <Ionicons name="md-chatbubbles-outline" size={24} color={focused ? '#583b90' : '#FFF'} />
          )
        }}
        />
        <Tab.Screen 
        name='Explorar'
        component={Explorar} 
        options={{
          tabBarInactiveTintColor: '#FFF',
          tabBarActiveTintColor: '#583b90',
          headerStyle:{
            backgroundColor: '#8F79BA',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            marginLeft: 40
          },
          tabBarIcon:({focused}) => (
            <Ionicons name="md-search-outline" size={24} color={focused ? '#583b90' : '#FFF'} />
          )
        }}
        />
        <Tab.Screen 
        name='Home'
        component={Home} 
        options={{
          tabBarInactiveTintColor: '#FFF',
          tabBarActiveTintColor: '#583b90',
          headerStyle:{
            backgroundColor: '#8F79BA',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            marginLeft: 40
          },
          tabBarIcon:({focused}) => (
            <Octicons name="home" size={25} color={focused ? '#583b90' : '#FFF'} />
          )
        }}
        />
        <Tab.Screen 
        name='Reserva'
        component={Reserva} 
        options={{
          tabBarInactiveTintColor: '#FFF',
          tabBarActiveTintColor: '#583b90',
          headerStyle:{
            backgroundColor: '#8F79BA',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            marginLeft: 40
          },
          tabBarIcon:({focused}) => (
            <Octicons name="calendar" size={23} color={focused ? '#583b90' : '#FFF'} />
          )
        }}
        />
        <Tab.Screen 
        name='Perfil'
        component={Perfil} 
        options={{
          tabBarInactiveTintColor: '#FFF',
          tabBarActiveTintColor: '#583b90',
          headerStyle:{
            backgroundColor: '#8F79BA',
          },
          headerTintColor: '#FFF',
          headerTitleStyle:{
            marginLeft: 40
          },
          tabBarIcon:({focused}) => (
            <Icon name="user-o" size={22} color={focused ? '#583b90' : '#FFF'} />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


  //Telas
  const StackRoute = createAppContainer(
    createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
        },                
      }, 
      MyTabs:{
        screen: MyTabs,
        navigationOptions:{
          title: '',
          headerTransparent: true
          }
      },
      // Telas cadastro de Cliente
      Step1C:{
          screen: Step1C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step2C:{
          screen: Step2C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step3C:{
          screen: Step3C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step4C:{
          screen: Step4C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step5C:{
          screen: Step5C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step6C:{
          screen: Step6C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step7C:{
          screen: Step7C,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },

      //Telas cadastro de empresa
      Step1E:{
          screen: Step1E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step2E:{
          screen: Step2E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step3E:{
          screen: Step3E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step4E:{
          screen: Step4E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step5E:{
          screen: Step5E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step6E:{
          screen: Step6E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step7E:{
          screen: Step7E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Step8E:{
          screen: Step8E,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },

      //Cadastro
      TipoCadastro:{
          screen: TipoCadastro,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      Termos:{
          screen: Termos,
          navigationOptions:{
            title: '',
            headerTransparent: true,
            headerTintColor: '#FFF'
            }
      },
      CadastroCriado:{
        screen: CadastroCriado,
        navigationOptions:{
          title: '',
          headerTransparent: true,
          headerTintColor: '#FFF'
        }
      }
    })
  );


  return (
    <>
      <StackRoute/>
    </>
  );
}