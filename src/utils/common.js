// 타입을 받아 아이콘 이름으로 변환시켜주는 함수
export const getFeedbackIcon = type => {
  let icon;
  switch (type) {
    case 'primary':
      icon = 'mdi-check-circle';
      break;
    case 'warning':
      icon = 'mdi-alert';
      break;
    case 'error':
      icon = 'mdi-close-circle';
      break;
    default:
      icon = 'mdi-information-outline';
      break;
  }
  return icon;
};
