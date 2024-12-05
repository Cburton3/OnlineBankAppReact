export interface Credentials {
    user: string;
    password: string;
};

export const createEmptyCredentials = (): Credentials => ({
    user: '',
    password: '',
});

export interface CredentialsFormErrors {
    user: string;
    password: string;
}

export const createEmptyCredentialsFormErrors = () : CredentialsFormErrors => ({//re the ({}) are to return an obj literal-wthout the () you just return the fx body
    user: '',
    password: '',
})