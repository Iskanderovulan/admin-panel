import { baseApi } from "@shared/api/rtkApi";
import { PackSchema } from "../model/types/packSchema";
import { TagTypes } from "@shared/const/tagTypes";
import { API_ENDPOINTS } from "@shared/config/apiConfig/apiConfig";

export const deletePackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        deletePack: builder.mutation<PackSchema, string>({
            query: (id) => ({
                url: `${API_ENDPOINTS.PACKS}/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, id) =>
                result
                    ? [{ type: TagTypes.PACKS, id }]
                    : error
                    ? [{ type: TagTypes.PACKS, id: TagTypes.LIST }]
                    : [{ type: TagTypes.PACKS, id: TagTypes.LIST }],
        }),
    }),
    overrideExisting: false,
});

export const { useDeletePackMutation } = deletePackApi;