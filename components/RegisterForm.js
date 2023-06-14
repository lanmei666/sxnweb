import React from "react";
const RegisterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // 处理表单提交逻辑
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">密码：</label>
        <input type="password" id="password" name="password" />
      </div>
      <div>
        <label htmlFor="confirmPassword">确认密码：</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />
      </div>
      <button type="submit">注册</button>
    </form>
  );
};
export default RegisterForm;