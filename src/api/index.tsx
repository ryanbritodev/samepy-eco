export const findUserByEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_MOCK_API}/api/v1/users`
    );
    const users = await response.json();
    const user = users.find(
      (user: { email: string; name: string; password: string }) =>
        user.email === email
    );

    if (user.password === password) {
      return user;
    }

    return null;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const createUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_MOCK_API}/api/v1/users`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, name }),
      }
    );
    const user = await response.json();

    if (user) {
      return user;
    }

    return null;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
};

export const findUserById = async (uId: string | null) => {
  if (uId === null) {
    return;
  }
  try {
    const response = await fetch(
      `${import.meta.env.VITE_MOCK_API}/api/v1/users/${uId}`
    );
    const user = await response.json();

    if (user) {
      return user;
    }

    return null;
  } catch (error) {
    console.error("Error fetching users:", error);
    return null;
  }
};

export const getEcoData = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_THINGSPEAK_API}/${
        import.meta.env.VITE_CHANNEL_ID
      }/feeds.json?api_key=${import.meta.env.VITE_READ_API_KEY}`
    );
    const eco = await response.json();

    if (eco) {
      return eco;
    }

    return null;
  } catch (error) {
    console.error("Error fetching eco data:", error);
    return null;
  }
};
