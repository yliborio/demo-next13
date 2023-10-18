"use client";
import { useState } from "react";
import styles from "./order-by.module.scss";
import { ArrowDownIcon } from "../icons/arrow-down";
import { useFilterStore } from "core/hooks/useFilter/useFilter";
import { Order } from "core/types/order";

export const OrderBy = () => {
  const [showModal, setShowModal] = useState(false);
  const { setOrder } = useFilterStore();

  const handleChange = (order: Order) => {
    setOrder(order);
    setShowModal(false);
  };

  return (
    <div className={styles["container"]}>
      <div
        className={styles["orderby"]}
        onClick={() => setShowModal(!showModal)}
      >
        <span>Order by</span>
        <ArrowDownIcon />
      </div>
      {showModal && (
        <div className={styles["modal"]}>
          <ul>
            <li>
              <a
                tabIndex={0}
                role="button"
                onClick={() => handleChange(Order.DEFAULT)}
              >
                Featured
              </a>
            </li>
            <li>
              <a
                tabIndex={0}
                role="button"
                onClick={() => handleChange(Order.ASC)}
              >
                Price: Low to High
              </a>
            </li>
            <li>
              <a
                tabIndex={0}
                role="button"
                onClick={() => handleChange(Order.DSC)}
              >
                Price: High to Low
              </a>
            </li>
            <li>
              <a
                tabIndex={0}
                role="button"
                onClick={() => handleChange(Order.RATING)}
              >
                Avg. Customer Review
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
