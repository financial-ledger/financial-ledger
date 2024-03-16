require("dotenv").config();
const { exec } = require("child_process");

// Supabase 타입 생성 명령어를 구성합니다.
const command = `npx supabase gen types typescript --project-id ${process.env.PROJECT_ID} --schema public > src/utils/supabase/interface.ts`;

// 명령어를 실행합니다.
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`타입 생성 실패`);
    console.error(error);
    return;
  }
  console.log(`타입 생성 성공`);
});
