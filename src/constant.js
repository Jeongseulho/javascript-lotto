const LOTTO_MESSAGE = Object.freeze({
  INPUT_MONEY_MSG: "구입금액을 입력해 주세요.",
  BUY_LOTTO_NUM_MSG: "개를 구매했습니다.",
  INPUT_WIN_NUM_MSG: "당첨 번호를 입력해 주세요.",
  WIN_NUM_LENGTH_ERROR_MSG: "[ERROR] 당첨번호는 6개여야 합니다.",
  LOTTO_PRICE_ERROR_MSG: "[ERROR] 금액은 1000의 배수인 숫자이여야 합니다.",
  WIN_NUM_RANGE_ERROR_MSG: "[ERROR] 당첨번호는 1~45사의 숫자이어야합니다",
  WIN_NUM_DUPLICATE_ERROR_MSG:
    "[ERROR] 당첨번호는 중복되지 않은 6개 숫자여야합니다",
});

const LOTTO_SETTING = Object.freeze({
  LOTTO_PRICE: 1000,
  LOTTO_NUM_MIN: 1,
  LOTTO_NUM_MAX: 45,
  LOTTO_NUM_LENGTH: 6,
});

module.exports = { LOTTO_MESSAGE, LOTTO_SETTING };
