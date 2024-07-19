import { Box, Typography } from "@mui/material";
import Link from "next/link";

const PrivacyPolicyContent = () => {
  return (
    <Box
      sx={{
        px: 2,
        pb: 4,
        overflow: "auto",
        maxHeight: "calc(100vh - 200px)",
      }}
    >
      <Box component={Link} href={"#title"}>
        <Typography align="center" sx={{ fontWeight: "bold", fontSize: 18 }}>
          Політика конфіденційності
        </Typography>
      </Box>

      <Box component={Link} href={"#terms-and-meaning"}>
        <Typography sx={{ fontWeight: "bold", mt: 2 }}>
          Терміни та визначення
        </Typography>
      </Box>
      <Box component={Link} href={"#interpretation"}>
        <Typography sx={{ mt: 1, ml: 2 }}>Інтерпретація</Typography>
      </Box>

      <Typography component={Link} href={"#definitions"} sx={{ mt: 1, ml: 2 }}>
        Визначення
      </Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Збір та використання Ваших персональних даних
      </Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>Типи даних, що збираються</Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>Персональні дані</Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>Дані про використання</Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>
        Інформація із соціальних мереж
      </Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>
        Технології відстеження та файли cookie
      </Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>
        Використання Ваших персональних даних
      </Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>
        Зберігання Ваших особистих даних
      </Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>
        Передача Ваших особистих даних
      </Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Розкриття Ваших особистих даних
      </Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>Ділові операції</Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>Правоохоронні органи</Typography>
      <Typography sx={{ mt: 1, ml: 2 }}>Інші юридичні вимоги</Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Безпека Ваших особистих даних
      </Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Конфіденційність дітей
      </Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Посилання на інші сайти
      </Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Зміни цієї Політики конфіденційності
      </Typography>
      <Typography sx={{ fontWeight: "bold", mt: 2 }}>
        Зв&apos;яжіться з нами
      </Typography>
    </Box>
  );
};

export default PrivacyPolicyContent;
