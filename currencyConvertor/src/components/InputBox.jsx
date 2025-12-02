import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  // Ensure the select value is valid — fallback to the first option or empty string
  const safeSelectValue =
    currencyOptions && currencyOptions.length && currencyOptions.includes(selectCurrency)
      ? selectCurrency
      : (currencyOptions && currencyOptions[0]) || "";

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 text-black"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          // show empty string instead of undefined to avoid React controlled/uncontrolled warnings
          value={amount ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            // send empty string if user cleared input, else number
            onAmountChange && onAmountChange(val === "" ? "" : Number(val));
          }}
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>

        {/* Make sure text is visible by forcing a dark text color */}
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none text-black"
          value={safeSelectValue}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {/* If no options, show a placeholder option so user sees something */}
          {currencyOptions && currencyOptions.length ? (
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>
            ))
          ) : (
            <option value="">No currencies</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
