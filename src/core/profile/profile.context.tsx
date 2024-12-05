import React from "react";

interface Context { //this is to share state and methods across multiple components in a React application without having to pass props manually
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

export const ProfileProvider : React.FC<Props> = (props) => {//ProfileProvider wraps its children with the ProfileContext.Provider (see below) allowing the profileProvider state and methods to be accessible to all components inside the ProfileProvider fx
    const {children} = props;
    const [userProfile, setUserProfile] = React.useState<string>('');//user profile has current users name, initialised empty ''

    return (
        <ProfileContext.Provider value={{// Provider is a special property automatically included when you create a React context using React.createContext()
        // used to wrap a component tree and supply values to the context, making those values accessible to all components within that tree
            userName: userProfile,
            setUserProfile: setUserProfile,
        }}
        >
            {children}
        </ProfileContext.Provider> //This pattern allows other components (children of profile provider) to consume the ProfileContext
    )
}

export const useProfileContext = () => React.useContext(ProfileContext);