import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getnotes } from '../services/user'



const initialState = {

    Total_Populationloading: true,
    Total_Population: [],

    Potential_Student_Populationloading: true,
    Potential_Student_Population: [],

    People_Movementloading: true,
    People_Movement: [],

    ZIPCODE_Distributionloading: true,
    ZIPCODE_Distribution: [],

    Population_Distributionloading: true,
    Population_Distribution: [],

    Student_Enrollmentloading: true,
    Student_Enrollment: [],

    Enrollment_Conversion_Maleloading: true,
    Enrollment_Conversion_Male: [],

    Enrollment_Conversion_Femaleloading: true,
    Enrollment_Conversion_Female: [],

    Enrollment_Conversion_Ethnicityloading: true,
    Enrollment_Conversion_Ethnicity: [],

    Zipcode_Enrollment_Conversionloading: true,
    Zipcode_Enrollment_Conversion: [],

    Economically_Disadvantage_Studentloading: true,
    Economically_Disadvantage_Student: [],

    Potential_student_Population_Distributionloading: true,
    Potential_student_Population_Distribution: [],

}

export const fetchTotal_Population = createAsyncThunk(
    'fetchTotal_Population',
    async (Total_Population, thunkAPI) => {
        Total_Population = { ...Total_Population, elasticQueryName: "Total_Population" }
        const response = await getnotes(Total_Population);
        return response.data
    }
)

export const fetchPotential_Student_Population = createAsyncThunk(
    'fetchPotential_Student_Population',
    async (Potential_Student_Population, thunkAPI) => {
        Potential_Student_Population = { ...Potential_Student_Population, elasticQueryName: "Potential_Student_Population" }
        const response = await getnotes(Potential_Student_Population);
        return response.data
    }
)

export const fetchPeople_Movement = createAsyncThunk(
    'fetchPeople_Movement',
    async (People_Movement, thunkAPI) => {
        People_Movement = { ...People_Movement, elasticQueryName: "People_Movement" }
        const response = await getnotes(People_Movement);
        return response.data
    }
)

export const fetchZIPCODE_Distribution = createAsyncThunk(
    'fetchZIPCODE_Distribution',
    async (ZIPCODE_Distribution, thunkAPI) => {
        ZIPCODE_Distribution = { ...ZIPCODE_Distribution, elasticQueryName: "ZIPCODE_Distribution" }
        const response = await getnotes(ZIPCODE_Distribution);
        return response.data
    }
)

export const fetchPopulation_Distribution = createAsyncThunk(
    'fetchPopulation_Distribution',
    async (Population_Distribution, thunkAPI) => {
        Population_Distribution = { ...Population_Distribution, elasticQueryName: "Population_Distribution" }
        const response = await getnotes(Population_Distribution);
        return response.data
    }
)

export const fetchStudent_Enrollment = createAsyncThunk(
    'fetchStudent_Enrollment',
    async (Student_Enrollment, thunkAPI) => {
        Student_Enrollment = { ...Student_Enrollment, elasticQueryName: "Student_Enrollment" }
        const response = await getnotes(Student_Enrollment);
        return response.data
    }
)

export const fetchEnrollment_Conversion_Male = createAsyncThunk(
    'fetchEnrollment_Conversion_Male',
    async (Enrollment_Conversion_Male, thunkAPI) => {
        Enrollment_Conversion_Male = { ...Enrollment_Conversion_Male, elasticQueryName: "Enrollment_Conversion_Male " }
        const response = await getnotes(Enrollment_Conversion_Male);
        return response.data
    }
)

export const fetchEnrollment_Conversion_Female = createAsyncThunk(
    'fetchEnrollment_Conversion_Female',
    async (Enrollment_Conversion_Female, thunkAPI) => {
        Enrollment_Conversion_Female = { ...Enrollment_Conversion_Female, elasticQueryName: "Enrollment_Conversion_Female" }
        const response = await getnotes(Enrollment_Conversion_Female);
        return response.data
    }
)

export const fetchEnrollment_Conversion_Ethnicity = createAsyncThunk(
    'fetchEnrollment_Conversion_Ethnicity',
    async (Enrollment_Conversion_Ethnicity, thunkAPI) => {
        Enrollment_Conversion_Ethnicity = { ...Enrollment_Conversion_Ethnicity, elasticQueryName: "Enrollment_Conversion_Ethnicity " }
        const response = await getnotes(Enrollment_Conversion_Ethnicity);
        return response.data
    }
)

export const fetchZipcode_Enrollment_Conversion = createAsyncThunk(
    'fetchZipcode_Enrollment_Conversion',
    async (Zipcode_Enrollment_Conversion, thunkAPI) => {
        Zipcode_Enrollment_Conversion = { ...Zipcode_Enrollment_Conversion, elasticQueryName: "Zipcode_Enrollment_Conversion " }
        const response = await getnotes(Zipcode_Enrollment_Conversion);
        return response.data
    }
)

export const fetchEconomically_Disadvantage_Student = createAsyncThunk(
    'fetchEconomically_Disadvantage_Student',
    async (Economically_Disadvantage_Student, thunkAPI) => {
        Economically_Disadvantage_Student = { ...Economically_Disadvantage_Student, elasticQueryName: "Economically_Disadvantage_Student" }
        const response = await getnotes(Economically_Disadvantage_Student);
        return response.data
    }
)

export const fetchPotential_student_Population_Distribution = createAsyncThunk(
    'fetchPotential_student_Population_Distribution',
    async (Potential_student_Population_Distribution, thunkAPI) => {
        Potential_student_Population_Distribution = { ...Potential_student_Population_Distribution, elasticQueryName: "Potential_student_Population_Distribution" }
        const response = await getnotes(Potential_student_Population_Distribution);
        return response.data
    }
)




export const CensusandPopulation = createSlice({
    name: 'CensusandPopulation',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTotal_Population.fulfilled, (state, action) => {
            state.Total_Population = action.payload;
            state.Total_Populationloading = false;
        }).addCase(fetchTotal_Population.pending, (state, action) => {
            state.Total_Populationloading = true;
        })

        builder.addCase(fetchPotential_Student_Population.fulfilled, (state, action) => {
            state.Potential_Student_Population = action.payload;
            state.Potential_Student_Populationloading = false;
        }).addCase(fetchPotential_Student_Population.pending, (state, action) => {
            state.Potential_Student_Populationloading = true;
        })
        builder.addCase(fetchPeople_Movement.fulfilled, (state, action) => {
            state.People_Movement = action.payload;
            state.People_Movementloading = false;
        }).addCase(fetchPeople_Movement.pending, (state, action) => {
            state.People_Movementloading = true;
        })
        builder.addCase(fetchZIPCODE_Distribution.fulfilled, (state, action) => {
            state.ZIPCODE_Distribution = action.payload;
            state.ZIPCODE_Distributionloading = false;
        }).addCase(fetchZIPCODE_Distribution.pending, (state, action) => {
            state.ZIPCODE_Distributionloading = true;
        })
        builder.addCase(fetchPopulation_Distribution.fulfilled, (state, action) => {
            state.Population_Distribution = action.payload;
            state.Population_Distributionloading = false;
        }).addCase(fetchPopulation_Distribution.pending, (state, action) => {
            state.Population_Distributionloading = true;
        })
        builder.addCase(fetchStudent_Enrollment.fulfilled, (state, action) => {
            state.Student_Enrollment = action.payload;
            state.Student_Enrollmentloading = false;
        }).addCase(fetchStudent_Enrollment.pending, (state, action) => {
            state.Student_Enrollmentloading = true;
        })


        builder.addCase(fetchEnrollment_Conversion_Male.fulfilled, (state, action) => {
            state.Enrollment_Conversion_Male = action.payload;
            state.Enrollment_Conversion_Maleloading = false;
        }).addCase(fetchEnrollment_Conversion_Male.pending, (state, action) => {
            state.Enrollment_Conversion_Maleloading = true;
        })

        builder.addCase(fetchEnrollment_Conversion_Female.fulfilled, (state, action) => {
            state.Enrollment_Conversion_Female = action.payload;
            state.Enrollment_Conversion_Femaleloading = false;
        }).addCase(fetchEnrollment_Conversion_Female.pending, (state, action) => {
            state.Enrollment_Conversion_Femaleloading = true;
        })

        builder.addCase(fetchEnrollment_Conversion_Ethnicity.fulfilled, (state, action) => {
            state.Enrollment_Conversion_Ethnicity = action.payload;
            state.Enrollment_Conversion_Ethnicityloading = false;
        }).addCase(fetchEnrollment_Conversion_Ethnicity.pending, (state, action) => {
            state.Enrollment_Conversion_Ethnicityloading = true;
        })
        builder.addCase(fetchZipcode_Enrollment_Conversion.fulfilled, (state, action) => {
            state.Zipcode_Enrollment_Conversion = action.payload;
            state.Zipcode_Enrollment_Conversionloading = false;
        }).addCase(fetchZipcode_Enrollment_Conversion.pending, (state, action) => {
            state.Zipcode_Enrollment_Conversionloading = true;
        })

        builder.addCase(fetchEconomically_Disadvantage_Student.fulfilled, (state, action) => {
            state.Economically_Disadvantage_Student = action.payload;
            state.Economically_Disadvantage_Studentloading = false;
        }).addCase(fetchEconomically_Disadvantage_Student.pending, (state, action) => {
            state.Economically_Disadvantage_Studentloading = true;
        })

        builder.addCase(fetchPotential_student_Population_Distribution.fulfilled, (state, action) => {
            state.Potential_student_Population_Distribution = action.payload;
            state.Potential_student_Population_Distributionloading = false;
        }).addCase(fetchPotential_student_Population_Distribution.pending, (state, action) => {
            state.Potential_student_Population_Distributionloading = true;
        })
    }
})


export default CensusandPopulation.reducer