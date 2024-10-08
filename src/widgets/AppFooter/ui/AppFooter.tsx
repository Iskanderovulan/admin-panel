import { classNames } from "shared/lib/classNames/classNames";
import { Layout } from "antd";
import cls from "./AppFooter.module.scss";
const { Footer } = Layout;

export const AppFooter = () => {
    return (
        <Footer className={classNames(cls.AppFooter, {}, [])}>
            CRM SYSTEM {new Date().getFullYear()}
        </Footer>
    );
};
