enum ORDER_STATUS {
    CANCELLED = "CANCELLED",
    DELIVERED = "DELIVERED",
    IN_PROGRESS = "INPROGRESS",
    ON_ROUTE = "ON ROUTE",
    PENDING = "PENDING",
    SHIPPED = "SHIPPED",
}

enum PACKAGE_SIZE {
    LARGE = "large",
    EXTRA_LARGE = "extra_large",
    MEDIUM = "medium",
    SMALL = "small"
}

enum WEIGHT_METRIC {
    KG = "kg",
    GRAM = "gram"
}

export {
    ORDER_STATUS,
    PACKAGE_SIZE,
    WEIGHT_METRIC,
};