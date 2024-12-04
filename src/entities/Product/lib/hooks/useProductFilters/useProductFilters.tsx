import { useMemo } from "react";
import { useFilterSearchParams } from "@shared/lib/hooks/useFilterSearchParams";
import { defaultPageSizeOption } from "@shared/const/pageSizeOptions";
import { FilterKeys } from "@entities/CommonControl";
import { ProductFiltersSchema } from "@entities/Product/model/types/ProductFiltersSchema";

export const useProductFilters = () => {
    const { getSearchParam } = useFilterSearchParams();

    const page = Number(getSearchParam(FilterKeys.PAGE)) || 1;
    const limit = Number(getSearchParam(FilterKeys.LIMIT)) || defaultPageSizeOption;
    const name = getSearchParam(FilterKeys.NAME) || "";
    const sortBy = getSearchParam(FilterKeys.SORT_BY);
    const createdBefore = getSearchParam(FilterKeys.CREATED_BEFORE);
    const createdAfter = getSearchParam(FilterKeys.CREATED_AFTER);
    const priceMin = getSearchParam(FilterKeys.PRICE_MIN);
    const priceMax = getSearchParam(FilterKeys.PRICE_MAX);

    const materialIds = useMemo(
        () => getSearchParam(FilterKeys.MATERIAL_IDS, true) || [],
        [getSearchParam],
    );
    const colorIds = useMemo(
        () => getSearchParam(FilterKeys.COLOR_IDS, true) || [],
        [getSearchParam],
    );
    const packIds = useMemo(
        () => getSearchParam(FilterKeys.PACK_IDS, true) || [],
        [getSearchParam],
    );

    const initialFilters = useMemo<ProductFiltersSchema>(() => {
        return {
            materials: materialIds,
            colors: colorIds,
            packs: packIds,
            dateRange: createdAfter && createdBefore ? [createdAfter, createdBefore] : null,
            priceRange: [priceMin ? Number(priceMin) : null, priceMax ? Number(priceMax) : null],
        };
    }, [materialIds, colorIds, packIds, createdBefore, createdAfter, priceMin, priceMax]);

    return {
        page,
        limit,
        name,
        sortBy,
        materialIds,
        colorIds,
        packIds,
        createdBefore,
        createdAfter,
        priceMin,
        priceMax,
        initialFilters,
    };
};