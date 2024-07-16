import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getnotes } from '../services/user';



const initialState = {

    Total_Enrollment_Top_tileloading: true,
    Total_Enrollment_Top_tile: [],

    Total_Enrollment_Trendloading: true,
    Total_Enrollment_Trend: [],

    Total_Enrollment_Cross_Dimensional_Analysisloading: true,
    Total_Enrollment_Cross_Dimensional_Analysis: [],


    Middle_High_Last_3yearsloading: true,
    Middle_High_Last_3years: [],

    Middle_High_Current_yearloading: true,
    Middle_High_Current_year: [],
    Elementary_to_Middle_Current_yearloading: true,
    Elementary_to_Middle_Current_year: [],

    Elementary_to_Middle_Last_2Yearsloading: true,
    Elementary_to_Middle_Last_2Years: [],

    Elementary_to_Middle_Top_Schoolloading: true,
    Elementary_to_Middle_Top_School: [],

    Elementary_to_Middle_Bottom_Schoolloading: true,
    Elementary_to_Middle_Bottom_School: [],

    Middle_High_Top_Schoolloading: true,
    Middle_High_Top_School: [],

    Middle_High_Bottom_Schoolloading: true,
    Middle_High_Bottom_School: [],

    Middle_High_Last_2yearsloading: true,
    Middle_High_Last_2years: [],

    Elementary_to_Middle_Last_3Yearsloading: true,
    Elementary_to_Middle_Last_3Years: [],

    Graduation_Elementary_to_Middleloading: true,
    Graduation_Elementary_to_Middle: [],

    Graduation_Middle_to_Highloading: true,
    Graduation_Middle_to_High: [],
    School_with_EnrollmentPercentage_Last2_yearloading: true,
    School_with_EnrollmentPercentage_Last2_year: [],

    School_with_EnrollmentPercentage_Last_yearloading: true,
    School_with_EnrollmentPercentage_Last_year: [],

    School_with_EnrollmentPercentage_Current_yearloading: true,
    School_with_EnrollmentPercentage_Current_year: [],
    Total_SchoolsPercentageChance_above5Percentageloading: true,
    Total_SchoolsPercentageChance_above5Percentage: [],

    Busi_Insight_School_Detailsloading: true,
    Busi_Insight_School_Details: [],

}


export const fetchTotal_Enrollment_Trend = createAsyncThunk(
    'fetchTotal_Enrollment_Trend',
    async (Total_Enrollment_Trend, thunkAPI) => {
        Total_Enrollment_Trend = { ...Total_Enrollment_Trend, elasticQueryName: "Total_Enrollment_Trend" }
        const response = await getnotes(Total_Enrollment_Trend);
        return response.data
    }
)

export const fetchTotal_Enrollment_Top_tile = createAsyncThunk(
    'fetchTotal_Enrollment_Top_tile',
    async (Total_Enrollment_Top_tile, thunkAPI) => {
        Total_Enrollment_Top_tile = { ...Total_Enrollment_Top_tile, elasticQueryName: "Total_Enrollment_Top_tile" }
        const response = await getnotes(Total_Enrollment_Top_tile);
        return response.data
    }
)


export const fetchTotal_Enrollment_Cross_Dimensional_Analysis = createAsyncThunk(
    'fetchTotal_Enrollment_Cross_Dimensional_Analysis',
    async (Total_Enrollment_Cross_Dimensional_Analysis, thunkAPI) => {
        Total_Enrollment_Cross_Dimensional_Analysis = { ...Total_Enrollment_Cross_Dimensional_Analysis, elasticQueryName: "Total_Enrollment_Cross_Dimensional_Analysis" }
        const response = await getnotes(Total_Enrollment_Cross_Dimensional_Analysis);
        return response.data
    }
)

export const fetchElementary_to_Middle_Current_year = createAsyncThunk(
    'fetchElementary_to_Middle_Current_year',
    async (Elementary_to_Middle_Current_year, thunkAPI) => {
        Elementary_to_Middle_Current_year = { ...Elementary_to_Middle_Current_year, elasticQueryName: "Elementary_to_Middle_Current_year" }
        const response = await getnotes(Elementary_to_Middle_Current_year);
        return response.data
    }
)

export const fetchMiddle_High_Last_3years = createAsyncThunk(
    'fetchMiddle_High_Last_3years',
    async (Middle_High_Last_3years, thunkAPI) => {
        Middle_High_Last_3years = { ...Middle_High_Last_3years, elasticQueryName: "Middle_High_Last_3years" }
        const response = await getnotes(Middle_High_Last_3years);
        return response.data
    }
)

export const fetchMiddle_High_Current_year = createAsyncThunk(
    'fetchMiddle_High_Current_year',
    async (Middle_High_Current_year, thunkAPI) => {
        Middle_High_Current_year = { ...Middle_High_Current_year, elasticQueryName: "Middle_High_Current_year" }
        const response = await getnotes(Middle_High_Current_year);
        return response.data
    }
)

export const fetchElementary_to_Middle_Last_2Years = createAsyncThunk(
    'fetchElementary_to_Middle_Last_2Years',
    async (Elementary_to_Middle_Last_2Years, thunkAPI) => {
        Elementary_to_Middle_Last_2Years = { ...Elementary_to_Middle_Last_2Years, elasticQueryName: "Elementary_to_Middle_Last_2Years" }
        const response = await getnotes(Elementary_to_Middle_Last_2Years);
        return response.data
    }
)


export const fetchElementary_to_Middle_Top_School = createAsyncThunk(
    'fetchElementary_to_Middle_Top_School',
    async (Elementary_to_Middle_Top_School, thunkAPI) => {
        Elementary_to_Middle_Top_School = { ...Elementary_to_Middle_Top_School, elasticQueryName: "Elementary_to_Middle_Top_School" }
        const response = await getnotes(Elementary_to_Middle_Top_School);
        return response.data
    }
)

export const fetchElementary_to_Middle_Bottom_School = createAsyncThunk(
    'fetchElementary_to_Middle_Bottom_School',
    async (Elementary_to_Middle_Bottom_School, thunkAPI) => {
        Elementary_to_Middle_Bottom_School = { ...Elementary_to_Middle_Bottom_School, elasticQueryName: "Elementary_to_Middle_Bottom_School" }
        const response = await getnotes(Elementary_to_Middle_Bottom_School);
        return response.data
    }
)

export const fetchMiddle_High_Top_School = createAsyncThunk(
    'fetchMiddle_High_Top_School',
    async (Middle_High_Top_School, thunkAPI) => {
        Middle_High_Top_School = { ...Middle_High_Top_School, elasticQueryName: "Middle_High_Top_School" }
        const response = await getnotes(Middle_High_Top_School);
        return response.data
    }
)


export const fetchMiddle_High_Bottom_School = createAsyncThunk(
    'fetchMiddle_High_Bottom_School',
    async (Middle_High_Bottom_School, thunkAPI) => {
        Middle_High_Bottom_School = { ...Middle_High_Bottom_School, elasticQueryName: "Middle_High_Bottom_School" }
        const response = await getnotes(Middle_High_Bottom_School);
        return response.data
    }
)

export const fetchMiddle_High_Last_2years = createAsyncThunk(
    'fetchMiddle_High_Last_2years',
    async (Middle_High_Last_2years, thunkAPI) => {
        Middle_High_Last_2years = { ...Middle_High_Last_2years, elasticQueryName: "Middle_High_Last_2years" }
        const response = await getnotes(Middle_High_Last_2years);
        return response.data
    }
)

export const fetchElementary_to_Middle_Last_3Years = createAsyncThunk(
    'fetchElementary_to_Middle_Last_3Years',
    async (Elementary_to_Middle_Last_3Years, thunkAPI) => {
        Elementary_to_Middle_Last_3Years = { ...Elementary_to_Middle_Last_3Years, elasticQueryName: "Elementary_to_Middle_Last_3Years" }
        const response = await getnotes(Elementary_to_Middle_Last_3Years);
        return response.data
    }
)

export const fetchGraduation_Elementary_to_Middle = createAsyncThunk(
    'fetchGraduation_Elementary_to_Middle',
    async (Graduation_Elementary_to_Middle, thunkAPI) => {
        Graduation_Elementary_to_Middle = { ...Graduation_Elementary_to_Middle, elasticQueryName: "Graduation_Elementary_to_Middle" }
        const response = await getnotes(Graduation_Elementary_to_Middle);
        return response.data
    }
)

export const fetchGraduation_Middle_to_High = createAsyncThunk(
    'fetchGraduation_Middle_to_High',
    async (Graduation_Middle_to_High, thunkAPI) => {
        Graduation_Middle_to_High = { ...Graduation_Middle_to_High, elasticQueryName: "Graduation_Middle_to_High" }
        const response = await getnotes(Graduation_Middle_to_High);
        return response.data
    }
)


export const fetchSchool_with_EnrollmentPercentage_Last2_year = createAsyncThunk(
    'fetchSchool_with_EnrollmentPercentage_Last2_year',
    async (School_with_EnrollmentPercentage_Last2_year, thunkAPI) => {
        School_with_EnrollmentPercentage_Last2_year = { ...School_with_EnrollmentPercentage_Last2_year, elasticQueryName: "School_with_Enrollment%_Last2_year" }
        const response = await getnotes(School_with_EnrollmentPercentage_Last2_year);
        return response.data
    }
)

export const fetchSchool_with_EnrollmentPercentage_Last_year = createAsyncThunk(
    'fetchSchool_with_EnrollmentPercentage_Last_year',
    async (School_with_EnrollmentPercentage_Last_year, thunkAPI) => {
        School_with_EnrollmentPercentage_Last_year = { ...School_with_EnrollmentPercentage_Last_year, elasticQueryName: "School_with_Enrollment%_Last_year" }
        const response = await getnotes(School_with_EnrollmentPercentage_Last_year);
        return response.data
    }
)
export const fetchSchool_with_EnrollmentPercentage_Current_year = createAsyncThunk(
    'fetchSchool_with_EnrollmentPercentage_Current_year',
    async (School_with_EnrollmentPercentage_Current_year, thunkAPI) => {
        School_with_EnrollmentPercentage_Current_year = { ...School_with_EnrollmentPercentage_Current_year, elasticQueryName: "School_with_Enrollment%_Current_year" }
        const response = await getnotes(School_with_EnrollmentPercentage_Current_year);
        return response.data
    }
)


export const fetchTotal_SchoolsPercentageChance_above5Percentage = createAsyncThunk(
    'fetchTotal_SchoolsPercentageChance_above5Percentage',
    async (Total_SchoolsPercentageChance_above5Percentage, thunkAPI) => {
        Total_SchoolsPercentageChance_above5Percentage = { ...Total_SchoolsPercentageChance_above5Percentage, elasticQueryName: "Total_Schools%Chance_above5%" }
        const response = await getnotes(Total_SchoolsPercentageChance_above5Percentage);
        return response.data
    }
)

export const fetchBusi_Insight_School_Details = createAsyncThunk(
    'fetchBusi_Insight_School_Details',
    async (Busi_Insight_School_Details, thunkAPI) => {
        Busi_Insight_School_Details = { ...Busi_Insight_School_Details, elasticQueryName: "Busi_Insight_School_Details" }
        const response = await getnotes(Busi_Insight_School_Details);
        return response.data
    }
)





export const BuisnessAnalytics = createSlice({
    name: 'BuisnessAnalytics',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(fetchTotal_Enrollment_Trend.fulfilled, (state, action) => {
            state.Total_Enrollment_Trend = action.payload;
            state.Total_Enrollment_Trendloading = false;
        }).addCase(fetchTotal_Enrollment_Trend.pending, (state, action) => {
            state.Total_Enrollment_Trendloading = true;
        })

        builder.addCase(fetchTotal_Enrollment_Top_tile.fulfilled, (state, action) => {
            state.Total_Enrollment_Top_tile = action.payload;
            state.Total_Enrollment_Top_tileloading = false;
        }).addCase(fetchTotal_Enrollment_Top_tile.pending, (state, action) => {
            state.Total_Enrollment_Top_tileloading = true;
        })

        builder.addCase(fetchTotal_Enrollment_Cross_Dimensional_Analysis.fulfilled, (state, action) => {
            state.Total_Enrollment_Cross_Dimensional_Analysis = action.payload;
            state.Total_Enrollment_Cross_Dimensional_Analysisloading = false;
        }).addCase(fetchTotal_Enrollment_Cross_Dimensional_Analysis.pending, (state, action) => {
            state.Total_Enrollment_Cross_Dimensional_Analysisloading = true;
        })

        builder.addCase(fetchMiddle_High_Last_3years.fulfilled, (state, action) => {
            state.Middle_High_Last_3years = action.payload;
            state.Middle_High_Last_3yearsloading = false;
        }).addCase(fetchMiddle_High_Last_3years.pending, (state, action) => {
            state.Middle_High_Last_3yearsloading = true;
        })
        builder.addCase(fetchMiddle_High_Current_year.fulfilled, (state, action) => {
            state.Middle_High_Current_year = action.payload;
            state.Middle_High_Current_yearloading = false;
        }).addCase(fetchMiddle_High_Current_year.pending, (state, action) => {
            state.Middle_High_Current_yearloading = true;
        })

        builder.addCase(fetchElementary_to_Middle_Current_year.fulfilled, (state, action) => {
            state.Elementary_to_Middle_Current_year = action.payload;
            state.Elementary_to_Middle_Current_yearloading = false;
        }).addCase(fetchElementary_to_Middle_Current_year.pending, (state, action) => {
            state.Elementary_to_Middle_Current_yearloading = true;
        })

        builder.addCase(fetchElementary_to_Middle_Last_2Years.fulfilled, (state, action) => {
            state.Elementary_to_Middle_Last_2Years = action.payload;
            state.Elementary_to_Middle_Last_2Yearsloading = false;
        }).addCase(fetchElementary_to_Middle_Last_2Years.pending, (state, action) => {
            state.Elementary_to_Middle_Last_2Yearsloading = true;
        })

        builder.addCase(fetchElementary_to_Middle_Top_School.fulfilled, (state, action) => {
            state.Elementary_to_Middle_Top_School = action.payload;
            state.Elementary_to_Middle_Top_Schoolloading = false;
        }).addCase(fetchElementary_to_Middle_Top_School.pending, (state, action) => {
            state.Elementary_to_Middle_Top_Schoolloading = true;
        })

        builder.addCase(fetchElementary_to_Middle_Bottom_School.fulfilled, (state, action) => {
            state.Elementary_to_Middle_Bottom_School = action.payload;
            state.Elementary_to_Middle_Bottom_Schoolloading = false;
        }).addCase(fetchElementary_to_Middle_Bottom_School.pending, (state, action) => {
            state.Elementary_to_Middle_Bottom_Schoolloading = true;
        })

        builder.addCase(fetchMiddle_High_Top_School.fulfilled, (state, action) => {
            state.Middle_High_Top_School = action.payload;
            state.Middle_High_Top_Schoolloading = false;
        }).addCase(fetchMiddle_High_Top_School.pending, (state, action) => {
            state.Middle_High_Top_Schoolloading = true;
        })

        builder.addCase(fetchMiddle_High_Bottom_School.fulfilled, (state, action) => {
            state.Middle_High_Bottom_School = action.payload;
            state.Middle_High_Bottom_Schoolloading = false;
        }).addCase(fetchMiddle_High_Bottom_School.pending, (state, action) => {
            state.Middle_High_Bottom_Schoolloading = true;
        })

        builder.addCase(fetchMiddle_High_Last_2years.fulfilled, (state, action) => {
            state.Middle_High_Last_2years = action.payload;
            state.Middle_High_Last_2yearsloading = false;
        }).addCase(fetchMiddle_High_Last_2years.pending, (state, action) => {
            state.Middle_High_Last_2yearsloading = true;
        })

        builder.addCase(fetchElementary_to_Middle_Last_3Years.fulfilled, (state, action) => {
            state.Elementary_to_Middle_Last_3Years = action.payload;
            state.Elementary_to_Middle_Last_3Yearsloading = false;
        }).addCase(fetchElementary_to_Middle_Last_3Years.pending, (state, action) => {
            state.Elementary_to_Middle_Last_3Yearsloading = true;
        })
        builder.addCase(fetchGraduation_Elementary_to_Middle.fulfilled, (state, action) => {
            state.Graduation_Elementary_to_Middle = action.payload;
            state.Graduation_Elementary_to_Middleloading = false;
        }).addCase(fetchGraduation_Elementary_to_Middle.pending, (state, action) => {
            state.Graduation_Elementary_to_Middleloading = true;
        })
        builder.addCase(fetchGraduation_Middle_to_High.fulfilled, (state, action) => {
            state.Graduation_Middle_to_High = action.payload;
            state.Graduation_Middle_to_Highloading = false;
        }).addCase(fetchGraduation_Middle_to_High.pending, (state, action) => {
            state.Graduation_Middle_to_Highloading = true;
        })

        builder.addCase(fetchSchool_with_EnrollmentPercentage_Last2_year.fulfilled, (state, action) => {
            state.School_with_EnrollmentPercentage_Last2_year = action.payload;
            state.School_with_EnrollmentPercentage_Last2_yearloading = false;
        }).addCase(fetchSchool_with_EnrollmentPercentage_Last2_year.pending, (state, action) => {
            state.School_with_EnrollmentPercentage_Last2_yearloading = true;
        })

        builder.addCase(fetchSchool_with_EnrollmentPercentage_Last_year.fulfilled, (state, action) => {
            state.School_with_EnrollmentPercentage_Last_year = action.payload;
            state.School_with_EnrollmentPercentage_Last_yearloading = false;
        }).addCase(fetchSchool_with_EnrollmentPercentage_Last_year.pending, (state, action) => {
            state.School_with_EnrollmentPercentage_Last_yearloading = true;
        })
        builder.addCase(fetchSchool_with_EnrollmentPercentage_Current_year.fulfilled, (state, action) => {
            state.School_with_EnrollmentPercentage_Current_year = action.payload;
            state.School_with_EnrollmentPercentage_Current_yearloading = false;
        }).addCase(fetchSchool_with_EnrollmentPercentage_Current_year.pending, (state, action) => {
            state.School_with_EnrollmentPercentage_Current_yearloading = true;
        })


        builder.addCase(fetchTotal_SchoolsPercentageChance_above5Percentage.fulfilled, (state, action) => {
            state.Total_SchoolsPercentageChance_above5Percentage = action.payload;
            state.Total_SchoolsPercentageChance_above5Percentageloading = false;
        }).addCase(fetchTotal_SchoolsPercentageChance_above5Percentage.pending, (state, action) => {
            state.Total_SchoolsPercentageChance_above5Percentageloading = true;
        })

        builder.addCase(fetchBusi_Insight_School_Details.fulfilled, (state, action) => {
            state.Busi_Insight_School_Details = action.payload;
            state.Busi_Insight_School_Detailsloading = false;
        }).addCase(fetchBusi_Insight_School_Details.pending, (state, action) => {
            state.Busi_Insight_School_Detailsloading = true;
        })

    }
})


export default BuisnessAnalytics.reducer