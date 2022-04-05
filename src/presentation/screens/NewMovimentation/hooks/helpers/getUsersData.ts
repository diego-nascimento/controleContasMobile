import React from 'react';
import {userModel} from '../../../../../models/user';
import {httpClient} from '../../../../../shared/http';
import {NEW_USERS_ENDPOINT} from '../../constants';

interface IgetUsersDataParams {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  setUsers: React.Dispatch<React.SetStateAction<userModel[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

type getUsersTypes = {
  users: userModel[];
};

export const getUsersData = async ({
  setError,
  setUsers,
  setLoading,
}: IgetUsersDataParams) => {
  setLoading(true);
  const response = await httpClient<getUsersTypes | any>({
    endPoint: NEW_USERS_ENDPOINT,
    baseURL: 'http://10.0.2.2:8082',
    method: 'GET',
  });

  if (response.statusCode !== 200) {
    setError(response.data);
  } else {
    setUsers(response.data);
  }
  setLoading(false);
};
