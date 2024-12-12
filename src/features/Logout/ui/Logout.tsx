import { FC } from "react";
import { useLogoutMutation } from "../api";
import { useAppSelector } from "@shared/lib/hooks/useAppSelector";
import { Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNotification } from "@shared/lib/hooks/useNotification";
import { NotificationData } from "@shared/const/notifications";
import { selectRefreshToken } from "@entities/Auth";
import { useLogoutEffect } from "@entities/Auth";
import { TranslationId } from "@shared/const/translation";

export const Logout: FC = () => {
    const [logout, { isLoading, isError, isSuccess, error, reset }] = useLogoutMutation();
    const refreshToken = useAppSelector(selectRefreshToken);
    const { t } = useTranslation(TranslationId.AUTH);

    useNotification({
        isError,
        isSuccess,
        error,
        reset,
        notificationKey: NotificationData.logoutSuccess,
    });

    useLogoutEffect({ isSuccess, isError, reset });

    const handleLogout = () => {
        if (refreshToken) {
            logout({ refreshToken });
        }
    };

    return (
        <Button type="primary" onClick={handleLogout} loading={isLoading} icon={<LogoutOutlined />}>
            {t("logoutButton")}
        </Button>
    );
};
