import wechatIcon from "@/assets/icons/WechatLogo.svg";

const WeChatButton = () => {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-20 h-20 bg-nikami-blue rounded-full shadow-[0px_2px_12px_0px_rgba(0,0,0,0.10)] flex items-center justify-center hover:scale-105 transition-transform"
    >
      <img src={wechatIcon} alt="WeChat" className="w-[61px] h-[61px]" />
    </a>
  );
};

export default WeChatButton;
