import React from 'react'

type SvgProps = {
  color?: string
}

export const BOLD = ({ color = '#3F3F40' }: SvgProps) => (
  <svg
    width="13"
    height="16"
    viewBox="0 0 13 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0.5C0 0.223858 0.223858 0 0.5 0H6.74964C9.09686 0 10.9996 1.90279 10.9996 4.25C10.9996 5.66251 10.3106 6.91407 9.25023 7.68687C10.9873 8.22073 12.25 9.8379 12.25 11.75C12.25 14.0972 10.3472 16 8 16H0.5C0.223858 16 0 15.7761 0 15.5V0.5ZM1 8.5V15H8C9.79493 15 11.25 13.5449 11.25 11.75C11.25 9.95507 9.79493 8.5 8 8.5H1ZM6.74964 7.5H1V1H6.74964C8.54457 1 9.99964 2.45507 9.99964 4.25C9.99964 6.04493 8.54457 7.5 6.74964 7.5Z"
      fill={`${color}`}
    />
  </svg>
)

export const ITALIC = ({ color = '#3F3F40' }: SvgProps) => (
  <svg
    width="16"
    height="15"
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.99962 0.5C4.99962 0.223858 5.22348 0 5.49962 0H15.5C15.7761 0 16 0.223858 16 0.5C16 0.776142 15.7761 1 15.5 1H11.2693L5.81826 13.751H10.5004C10.7765 13.751 11.0004 13.9748 11.0004 14.251C11.0004 14.5271 10.7765 14.751 10.5004 14.751H0.5C0.223858 14.751 0 14.5271 0 14.251C0 13.9748 0.223858 13.751 0.5 13.751H4.73071L10.1817 1H5.49962C5.22348 1 4.99962 0.776142 4.99962 0.5Z"
      fill={`${color}`}
    />
  </svg>
)

export const UNDERLINE = ({ color = '#3F3F40' }: SvgProps) => (
  <svg
    width="12"
    height="16"
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.90918 0.5C1.90918 0.223858 1.68532 0 1.40918 0C1.13304 0 0.90918 0.223858 0.90918 0.5V6.86364C0.90918 9.64978 3.16849 11.9091 5.95463 11.9091C8.74078 11.9091 11.0001 9.64978 11.0001 6.86364V0.5C11.0001 0.223858 10.7762 0 10.5001 0C10.2239 0 10.0001 0.223858 10.0001 0.5V6.86364C10.0001 9.09749 8.18849 10.9091 5.95463 10.9091C3.72078 10.9091 1.90918 9.09749 1.90918 6.86364V0.5ZM0.5 14.5469C0.223858 14.5469 0 14.7707 0 15.0469C0 15.323 0.223858 15.5469 0.5 15.5469H11.4091C11.6852 15.5469 11.9091 15.323 11.9091 15.0469C11.9091 14.7707 11.6852 14.5469 11.4091 14.5469H0.5Z"
      fill={`${color}`}
    />
  </svg>
)
