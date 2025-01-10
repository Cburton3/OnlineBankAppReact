import React from "react";

//PURPOSE of page: Provide a shared state (userName) and a method (setUserProfile) to update that state across multiple React components without needing to pass props manually.
//Use React Context to allow components within the ProfileProvider to access and update the userName value directly

interface Context { //this is to share state and methods across multiple components in a React application without having to pass props manually
    //This ensures that userName and setUserProfile are always available with their correct types when accessed via the context.

    userName: string;
    setUserProfile: (userName: string) => void;
}

const noUserLogin = 'no user login';

const ProfileContext = React.createContext<Context>({
    userName: noUserLogin,//createContext fx enables sharing state or values across a component tree without having to pass props manually
    setUserProfile: () => {} //no fx defined yet
})

interface Props {
    children: React.ReactNode;
}

//main fx below
export const ProfileProvider : React.FC<Props> = (props) => {//ProfileProvider wraps its children with the ProfileContext.Provider (see below) allowing the profileProvider state and methods to be accessible to all components inside the ProfileProvider fx
    const {children} = props;
    const [userProfile, setUserProfile] = React.useState<string>('');//user profile has current users name, initialised empty ''

    return (
        <ProfileContext.Provider value={{// Provider is a special property automatically included when you create a React context using React.createContext()
        // used to wrap a component tree and supply values to the context, making those values accessible to all components within that tree
            userName: userProfile,//current username
            setUserProfile: setUserProfile, // fx to update username
            // so now userName and setuserProfile are available to all child elements
        }}
        >
            {children} 
        </ProfileContext.Provider> //This pattern allows other components (children of profile provider) to consume the ProfileContext
        //this is explained in 05-app-cuentas-layout.md pg 15
    )
}

export const useProfileContext = () => React.useContext(ProfileContext);//provides access to the values stored in ProfileCOntext (userName and setUser..) so you dont need to manually call React.useContext(ProfileContext) in multipe places
