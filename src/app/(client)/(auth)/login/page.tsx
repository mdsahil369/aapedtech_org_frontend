import themeConfig from "@/config/theme.json";

const page = async () => {
  const theme = themeConfig.login;

  let Page;
  try {
    Page = (await import(`@/themes/${theme}/auth/login`)).default;
  } catch (error) {
    Page = (await import(`@/themes/default/auth/login`)).default;
  }
  if (!Page) {
    return null;
  }

  return (
    <div>
      <Page />
    </div>
  );
};

export default page;
