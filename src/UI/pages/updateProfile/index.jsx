import { useEffect, useState } from 'react';
import {
  UpdateProfileContainer,
  UpdateProfileFormBox,
} from '../../components/updateProfile';
import UpdateProfileForm from './updateProfileForm';
import { getProfile, updateProfile } from '../../api/auth';
import { SnackbarComponent } from '../../components/reusable/snackbar';

function UpdateProfilePage() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [snackbar, setSnackbar] = useState({});

  async function getUserProfile() {
    try {
      const result = await getProfile();
      if (!result.data) return;
      setUser(result.data.user);
    } catch (error) {
      console.error(error);
    }
  }
  async function onSubmit(inputData) {
    setLoading(true);
    const userData = user;
    userData.firstName = inputData.firstName;
    userData.lastName = inputData.lastName;
    try {
      await updateProfile(userData);

      setSnackbar({ type: 'success', message: 'Profile Updated Successfully' });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <UpdateProfileContainer>
      {user.email ? (
        <UpdateProfileFormBox>
          <UpdateProfileForm
            onSubmit={(data) => onSubmit(data)}
            loading={loading}
            user={user}
          />
        </UpdateProfileFormBox>
      ) : (
        <div style={{ color: 'blue' }}>Loading...</div>
      )}

      <SnackbarComponent snackbar={snackbar} setSnackbar={setSnackbar} />
    </UpdateProfileContainer>
  );
}

export default UpdateProfilePage;

// const user = {
//   id: '6c1a8b2e-5e62-4fc3-a6ed-ef708109582b',
//   username: 'TestUsername',
//   firstName: 'TestFirstName',
//   lastName: 'TestLastName',
//   email: 'Test@example.com',
//   attributes: {
//     accountType: ['ACCOUNT_ADMIN'],
//     language: ['en'],
//     organizations: ['b1e807a2-a51f-4ad9-a8a2-fbab920e779d'],
//     origin: ['datawyse.io'],
//     roles: [
//       '1dcf9fa6-05f9-49b2-b942-4c122a67eaa1',
//       '39950315-1055-47ee-bad2-fc04deea6ec7',
//       '61f03d1b-f301-4f4d-bc1a-e7c9553b3098',
//       '3261a126-8a46-4710-8505-682ccd38cdcb',
//       'bb3409cb-a096-4824-8d4f-848becf9becb',
//     ],
//     subscription: ['121df220-a597-43b7-b5cb-a65f5cf94ff1'],
//   },
// };
