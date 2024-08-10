import { UserMenu } from '.';
import { Button } from '@nextui-org/react';
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function UserMenuAndSigninButtonConditionalRendering() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user);

  return (
    <>
      {user ? (
        <UserMenu />
      ) : (
        <Button variant="ghost" color="primary">
          <LoginLink>Sign In</LoginLink>
        </Button>
      )}
    </>
  );
}
