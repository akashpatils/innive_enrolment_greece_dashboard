import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getnotes } from '../services/user'



const initialState = {

    TotalEnrollmentloading: true,
    TotalEnrollment: [],

    EarlyK12Adultloading: true,
    EarlyK12Adult: [],

    EnrollmentSplituploading: true,
    EnrollmentSplitup: [],

    Newloading: true,
    New: [],

    Reenteredloading: true,
    Reentered: [],

    TransferringwithinDistrictloading: true,
    TransferringwithinDistrict: [],

    TransferredOutOfDistrictloading: true,
    TransferredOutOfDistrict: [],

    Dropoutloading: true,
    Dropout: [],

    BottomSchoolsLosingloading: true,
    BottomSchoolsLosing: [],

    TopSchoolsGainingloading: true,
    TopSchoolsGaining: [],

    NewlyEnrolledloading: true,
    NewlyEnrolled: [],

    ContinutingStudentsloading: true,
    ContinutingStudents: [],

    Ellloading: true,
    Ell: [],

    Totalenrollmenttrendviewloading: true,
    Totalenrollmenttrendview: [],

    TotalenrollmentDimensionviewloading: true,
    TotalenrollmentDimensionview: [],

    TopSchoolGainingloading: true,
    TopSchoolGaining: [],

    BottomSchoolLosingloading: true,
    BottomSchoolLosing: [],

    Eco_Disadvantageloading: true,
    Eco_Disadvantage: [],

    Enrollment_HISPANICloading: true,
    Enrollment_HISPANIC: [],

    Female_Maleloading: true,
    Female_Male: [],



    EarlyEDK12AdultEDloading: true,
    EarlyEDK12AdultED: [],

    Matriculationloading: true,
    Matriculation: [],

    Grade_Retension_rateloading: true,
    Grade_Retension_rate: [],

    Grade_Retension_rate_Chartloading: true,
    Grade_Retension_rate_Chart: [],

    Enrollment_Dimension_Viewloading: true,
    Enrollment_Dimension_View: [],

    Enrollment_Trend_Viewloading: true,
    Enrollment_Trend_View: [],

    Grade_Ethnicity_Spreadloading: true,
    Grade_Ethnicity_Spread: [],

    Special_Group_Spreadloading: true,
    Special_Group_Spread: [],

    StudentsbyGradeloading: true,
    StudentsbyGrade: [],

    Student_Retatining_Over_Yearsloading: true,
    Student_Retatining_Over_Years: [],

    Student_Spending_Cross_Dimension_Viewloading: true,
    Student_Spending_Cross_Dimension_View: [],
    
    StudentSpendingtimeInDistrictloading: true,
    StudentSpendingtimeInDistrict: [],

    StudentSpendingStudentsGrouploading: true,
    StudentSpendingStudentsGroup: [],

    Student_Spending_Trend_Chartloading: true,
    Student_Spending_Trend_Chart: [],
}

export const fetchTotalEnrollment = createAsyncThunk(
    'fetchTotalEnrollment',
    async (TotalEnrollment, thunkAPI) => {
        TotalEnrollment = { ...TotalEnrollment, elasticQueryName: "Total_Enrollment" }
        const response = await getnotes(TotalEnrollment);
        return response.data
    }
)

export const fetchEarlyK12Adult = createAsyncThunk(
    'fetchEarlyK12Adult',
    async (EarlyK12Adult, thunkAPI) => {
        EarlyK12Adult = { ...EarlyK12Adult, elasticQueryName: "Early_K12_Adult" }
        const response = await getnotes(EarlyK12Adult);
        return response.data
    }
)

export const fetchEnrollmentSplitup = createAsyncThunk(
    'fetchEnrollmentSplitup',
    async (EnrollmentSplitup, thunkAPI) => {
        EnrollmentSplitup = { ...EnrollmentSplitup, elasticQueryName: "Total_enrollment_Splitup" }
        const response = await getnotes(EnrollmentSplitup);
        return response.data
    }
)

export const fetchNew = createAsyncThunk(
    'fetchNew',
    async (New, thunkAPI) => {
        New = { ...New, elasticQueryName: "New" }
        const response = await getnotes(New);
        return response.data
    }
)

export const fetchReentered = createAsyncThunk(
    'fetchReentered',
    async (Reentered, thunkAPI) => {
        Reentered = { ...Reentered, elasticQueryName: "Re_entered" }
        const response = await getnotes(Reentered);
        return response.data
    }
)

export const fetchTransferringwithinDistrict = createAsyncThunk(
    'fetchTransferringwithinDistrict',
    async (TransferringwithinDistrict, thunkAPI) => {
        TransferringwithinDistrict = { ...TransferringwithinDistrict, elasticQueryName: "Transferring_within_District" }
        const response = await getnotes(TransferringwithinDistrict);
        return response.data
    }
)

export const fetchTransferredOutOfDistrict = createAsyncThunk(
    'fetchTransferredOutOfDistrict',
    async (TransferredOutOfDistrict, thunkAPI) => {
        TransferredOutOfDistrict = { ...TransferredOutOfDistrict, elasticQueryName: "Transferred_OutOf_District" }
        const response = await getnotes(TransferredOutOfDistrict);
        return response.data
    }
)

export const fetchDropout = createAsyncThunk(
    'fetchDropout',
    async (Dropout, thunkAPI) => {
        Dropout = { ...Dropout, elasticQueryName: "Dropout" }
        const response = await getnotes(Dropout);
        return response.data
    }
)

export const fetcBottomSchoolsLosing = createAsyncThunk(
    'fetcBottomSchoolsLosing',
    async (BottomSchoolsLosing, thunkAPI) => {
        BottomSchoolsLosing = { ...BottomSchoolsLosing, elasticQueryName: "Bottom_Schools_Losing" }
        const response = await getnotes(BottomSchoolsLosing);
        return response.data
    }
)
export const fetcTopSchoolsGaining = createAsyncThunk(
    'fetcTopSchoolsGaining',
    async (TopSchoolsGaining, thunkAPI) => {
        TopSchoolsGaining = { ...TopSchoolsGaining, elasticQueryName: "Top_Schools_Gaining" }
        const response = await getnotes(TopSchoolsGaining);
        return response.data
    }
)


export const fetchNewlyEnrolled = createAsyncThunk(
    'fetchNewlyEnrolled',
    async (NewlyEnrolled, thunkAPI) => {
        NewlyEnrolled = { ...NewlyEnrolled, elasticQueryName: "Newly_Enrolled" }
        const response = await getnotes(NewlyEnrolled);
        return response.data
    }
)

export const fetchContinutingStudents = createAsyncThunk(
    'fetchContinutingStudents',
    async (ContinutingStudents, thunkAPI) => {
        ContinutingStudents = { ...ContinutingStudents, elasticQueryName: "Continuing_Students" }
        const response = await getnotes(ContinutingStudents);
        return response.data
    }
)
export const fetchEll = createAsyncThunk(
    'fetchEll',
    async (Ell, thunkAPI) => {
        Ell = { ...Ell, elasticQueryName: "ELL" }
        const response = await getnotes(Ell);
        return response.data
    }
)

export const fetcEarlyEDK12AdultED = createAsyncThunk(
    'fetcEarlyEDK12AdultED',
    async (EarlyEDK12AdultED, thunkAPI) => {
        EarlyEDK12AdultED = { ...EarlyEDK12AdultED, elasticQueryName: "EarlyED_K12_AdultED" }
        const response = await getnotes(EarlyEDK12AdultED);
        return response.data
    }
)

export const fetcMatriculation = createAsyncThunk(
    'fetcMatriculation',
    async (Matriculation, thunkAPI) => {
        Matriculation = { ...Matriculation, elasticQueryName: "Matriculation" }
        const response = await getnotes(Matriculation);
        return response.data
    }
)


export const fetchTotalenrollmenttrendview = createAsyncThunk(
    'fetchTotalenrollmenttrendview',
    async (Totalenrollmenttrendview, thunkAPI) => {
        Totalenrollmenttrendview = { ...Totalenrollmenttrendview, elasticQueryName: "Total_enrollment_trend_view" }
        const response = await getnotes(Totalenrollmenttrendview);
        return response.data
    }
)

export const fetchTotalenrollmentDimensionview = createAsyncThunk(
    'fetchTotalenrollmentDimensionview',
    async (TotalenrollmentDimensionview, thunkAPI) => {
        TotalenrollmentDimensionview = { ...TotalenrollmentDimensionview, elasticQueryName: "Total_enrollment_Dimension_view" }
        const response = await getnotes(TotalenrollmentDimensionview);
        return response.data
    }
)

export const fetchEco_Disadvantage = createAsyncThunk(
    'fetchEco_Disadvantage',
    async (Eco_Disadvantage, thunkAPI) => {
        Eco_Disadvantage = { ...Eco_Disadvantage, elasticQueryName: "Eco_Disadvantage" }
        const response = await getnotes(Eco_Disadvantage);
        return response.data
    }
)

export const fetchEnrollment_HISPANIC = createAsyncThunk(
    'fetchEnrollment_HISPANIC',
    async (Enrollment_HISPANIC, thunkAPI) => {
        Enrollment_HISPANIC = { ...Enrollment_HISPANIC, elasticQueryName: "Enrollment_HISPANIC" }
        const response = await getnotes(Enrollment_HISPANIC);
        return response.data
    }
)

export const fetchFemale_Male = createAsyncThunk(
    'fetchFemale_Male',
    async (Female_Male, thunkAPI) => {
        Female_Male = { ...Female_Male, elasticQueryName: "Female_Male" }
        const response = await getnotes(Female_Male);
        return response.data
    }
)
export const fetchGrade_Retension_rate = createAsyncThunk(
    'fetchGrade_Retension_rate',
    async (Grade_Retension_rate, thunkAPI) => {
        Grade_Retension_rate = { ...Grade_Retension_rate, elasticQueryName: "Grade_Retension_rate" }
        const response = await getnotes(Grade_Retension_rate);
        return response.data
    }
)

export const fetchGrade_Retension_rate_Chart = createAsyncThunk(
    'fetchGrade_Retension_rate_Chart',
    async (Grade_Retension_rate_Chart, thunkAPI) => {
        Grade_Retension_rate_Chart = { ...Grade_Retension_rate_Chart, elasticQueryName: "Grade_Retension_rate_Chart" }
        const response = await getnotes(Grade_Retension_rate_Chart);
        return response.data
    }
)

export const fetchEnrollment_Dimension_View = createAsyncThunk(
    'fetchEnrollment_Dimension_View',
    async (Enrollment_Dimension_View, thunkAPI) => {
        Enrollment_Dimension_View = { ...Enrollment_Dimension_View, elasticQueryName: "Enrollment_Dimension_View" }
        const response = await getnotes(Enrollment_Dimension_View);
        return response.data
    }
)


export const fetchEnrollment_Trend_View = createAsyncThunk(
    'fetchEnrollment_Trend_View',
    async (Enrollment_Trend_View, thunkAPI) => {
        Enrollment_Trend_View = { ...Enrollment_Trend_View, elasticQueryName: "Enrollment_Trend_View" }
        const response = await getnotes(Enrollment_Trend_View);
        return response.data
    }
)

export const fetchGrade_Ethnicity_Spread = createAsyncThunk(
    'fetchGrade_Ethnicity_Spread',
    async (Grade_Ethnicity_Spread, thunkAPI) => {
        Grade_Ethnicity_Spread = { ...Grade_Ethnicity_Spread, elasticQueryName: "Grade_Ethnicity_Spread" }
        const response = await getnotes(Grade_Ethnicity_Spread);
        return response.data
    }
)

export const fetchSpecial_Group_Spread = createAsyncThunk(
    'fetchSpecial_Group_Spread',
    async (Special_Group_Spread, thunkAPI) => {
        Special_Group_Spread = { ...Special_Group_Spread, elasticQueryName: "Special_Group_Spread" }
        const response = await getnotes(Special_Group_Spread);
        return response.data
    }
)

export const fetchStudentsbyGrade = createAsyncThunk(
    'fetchStudentsbyGrade',
    async (StudentsbyGrade, thunkAPI) => {
        StudentsbyGrade = { ...StudentsbyGrade, elasticQueryName: "Students_by_grade" }
        const response = await getnotes(StudentsbyGrade);
        return response.data
    }
)

export const fetchStudent_Retatining_Over_Years = createAsyncThunk(
    'fetchStudent_Retatining_Over_Years',
    async (Student_Retatining_Over_Years, thunkAPI) => {
        Student_Retatining_Over_Years = { ...Student_Retatining_Over_Years, elasticQueryName: "Student_Retatining_Over_Years" }
        const response = await getnotes(Student_Retatining_Over_Years);
        return response.data
    }
)

export const fetchStudent_Spending_Cross_Dimension_View = createAsyncThunk(
    'fetchStudent_Spending_Cross_Dimension_View',
    async (Student_Spending_Cross_Dimension_View, thunkAPI) => {
        Student_Spending_Cross_Dimension_View = { ...Student_Spending_Cross_Dimension_View, elasticQueryName: "Student_Spending_Cross_Dimension_View" }
        const response = await getnotes(Student_Spending_Cross_Dimension_View);
        return response.data
    }
)

export const fetchStudentSpendingtimeInDistrict = createAsyncThunk(
    'fetchStudentSpendingtimeInDistrict',
    async (StudentSpendingtimeInDistrict, thunkAPI) => {
        StudentSpendingtimeInDistrict = { ...StudentSpendingtimeInDistrict, elasticQueryName: "Student_Spending_%time_In_District" }
        const response = await getnotes(StudentSpendingtimeInDistrict);
        return response.data
    }
)

export const fetchStudentSpendingStudentsGroup = createAsyncThunk(
    'fetchStudentSpendingStudentsGroup',
    async (StudentSpendingStudentsGroup, thunkAPI) => {
        StudentSpendingStudentsGroup = { ...StudentSpendingStudentsGroup, elasticQueryName: "Student_Spending_Students_Group" }
        const response = await getnotes(StudentSpendingStudentsGroup);
        return response.data
    }
)

export const fetchStudent_Spending_Trend_Chart = createAsyncThunk(
    'fetchStudent_Spending_Trend_Chart',
    async (Student_Spending_Trend_Chart, thunkAPI) => {
        Student_Spending_Trend_Chart = { ...Student_Spending_Trend_Chart, elasticQueryName: "Student_Spending_Trend_Chart" }
        const response = await getnotes(Student_Spending_Trend_Chart);
        return response.data
    }
)


export const Overview = createSlice({
    name: 'Overview',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchTotalEnrollment.fulfilled, (state, action) => {
            state.TotalEnrollment = action.payload;
            state.TotalEnrollmentloading = false;
        }).addCase(fetchTotalEnrollment.pending, (state, action) => {
            state.TotalEnrollmentloading = true;
        })

        builder.addCase(fetchEarlyK12Adult.fulfilled, (state, action) => {
            state.EarlyK12Adult = action.payload;
            state.EarlyK12Adultloading = false;
        }).addCase(fetchEarlyK12Adult.pending, (state, action) => {
            state.EarlyK12Adultloading = true;
        })

        builder.addCase(fetchEnrollmentSplitup.fulfilled, (state, action) => {
            state.EnrollmentSplitup = action.payload;
            state.EnrollmentSplituploading = false;
        }).addCase(fetchEnrollmentSplitup.pending, (state, action) => {
            state.EnrollmentSplituploading = true;
        })

        builder.addCase(fetchNew.fulfilled, (state, action) => {
            state.New = action.payload;
            state.Newloading = false;
        }).addCase(fetchNew.pending, (state, action) => {
            state.Newloading = true;
        })

        builder.addCase(fetchReentered.fulfilled, (state, action) => {
            state.Reentered = action.payload;
            state.Reenteredloading = false;
        }).addCase(fetchReentered.pending, (state, action) => {
            state.Reenteredloading = true;
        })

        builder.addCase(fetchTransferringwithinDistrict.fulfilled, (state, action) => {
            state.TransferringwithinDistrict = action.payload;
            state.TransferringwithinDistrictloading = false;
        }).addCase(fetchTransferringwithinDistrict.pending, (state, action) => {
            state.TransferringwithinDistrictloading = true;
        })

        builder.addCase(fetchTransferredOutOfDistrict.fulfilled, (state, action) => {
            state.TransferredOutOfDistrict = action.payload;
            state.TransferredOutOfDistrictloading = false;
        }).addCase(fetchTransferredOutOfDistrict.pending, (state, action) => {
            state.TransferredOutOfDistrictloading = true;
        })

        builder.addCase(fetchDropout.fulfilled, (state, action) => {
            state.Dropout = action.payload;
            state.Dropoutloading = false;
        }).addCase(fetchDropout.pending, (state, action) => {
            state.Dropoutloading = true;
        })

        builder.addCase(fetcBottomSchoolsLosing.fulfilled, (state, action) => {
            state.BottomSchoolsLosing = action.payload;
            state.BottomSchoolsLosingloading = false;
        }).addCase(fetcBottomSchoolsLosing.pending, (state, action) => {
            state.BottomSchoolsLosingloading = true;
        })

        builder.addCase(fetcTopSchoolsGaining.fulfilled, (state, action) => {
            state.TopSchoolsGaining = action.payload;
            state.TopSchoolsGainingloading = false;
        }).addCase(fetcTopSchoolsGaining.pending, (state, action) => {
            state.TopSchoolsGainingloading = true;
        })

        builder.addCase(fetchContinutingStudents.fulfilled, (state, action) => {
            state.ContinutingStudents = action.payload;
            state.ContinutingStudentsloading = false;
        }).addCase(fetchContinutingStudents.pending, (state, action) => {
            state.ContinutingStudentsloading = true;
        })

        builder.addCase(fetchEll.fulfilled, (state, action) => {
            state.Ell = action.payload;
            state.Ellloading = false;
        }).addCase(fetchEll.pending, (state, action) => {
            state.Ellloading = true;
        })

        builder.addCase(fetchNewlyEnrolled.fulfilled, (state, action) => {
            state.NewlyEnrolled = action.payload;
            state.NewlyEnrolledloading = false;
        }).addCase(fetchNewlyEnrolled.pending, (state, action) => {
            state.NewlyEnrolledloading = true;
        })

        builder.addCase(fetchTotalenrollmenttrendview.fulfilled, (state, action) => {
            state.Totalenrollmenttrendview = action.payload;
            state.Totalenrollmenttrendviewloading = false;
        }).addCase(fetchTotalenrollmenttrendview.pending, (state, action) => {
            state.Totalenrollmenttrendviewloading = true;
        })

        builder.addCase(fetchTotalenrollmentDimensionview.fulfilled, (state, action) => {
            state.TotalenrollmentDimensionview = action.payload;
            state.TotalenrollmentDimensionviewloading = false;
        }).addCase(fetchTotalenrollmentDimensionview.pending, (state, action) => {
            state.TotalenrollmentDimensionviewloading = true;
        })

        builder.addCase(fetchEco_Disadvantage.fulfilled, (state, action) => {
            state.Eco_Disadvantage = action.payload;
            state.Eco_Disadvantageloading = false;
        }).addCase(fetchEco_Disadvantage.pending, (state, action) => {
            state.Eco_Disadvantageloading = true;
        })

        builder.addCase(fetchEnrollment_HISPANIC.fulfilled, (state, action) => {
            state.Enrollment_HISPANIC = action.payload;
            state.Enrollment_HISPANICloading = false;
        }).addCase(fetchEnrollment_HISPANIC.pending, (state, action) => {
            state.Enrollment_HISPANICloading = true;
        })
        builder.addCase(fetchFemale_Male.fulfilled, (state, action) => {
            state.Female_Male = action.payload;
            state.Female_Maleloading = false;
        }).addCase(fetchFemale_Male.pending, (state, action) => {
            state.Female_Maleloading = true;
        })
        builder.addCase(fetcMatriculation.fulfilled, (state, action) => {
            state.Matriculation = action.payload;
            state.Matriculationloading = false;
        }).addCase(fetcMatriculation.pending, (state, action) => {
            state.Matriculationloading = true;
        })

        builder.addCase(fetcEarlyEDK12AdultED.fulfilled, (state, action) => {
            state.EarlyEDK12AdultED = action.payload;
            state.EarlyEDK12AdultEDloading = false;
        }).addCase(fetcEarlyEDK12AdultED.pending, (state, action) => {
            state.EarlyEDK12AdultEDloading = true;
        })

        builder.addCase(fetchGrade_Retension_rate.fulfilled, (state, action) => {
            state.Grade_Retension_rate = action.payload;
            state.Grade_Retension_rateloading = false;
        }).addCase(fetchGrade_Retension_rate.pending, (state, action) => {
            state.Grade_Retension_rateloading = true;
        })


        builder.addCase(fetchGrade_Retension_rate_Chart.fulfilled, (state, action) => {
            state.Grade_Retension_rate_Chart = action.payload;
            state.Grade_Retension_rate_Chartloading = false;
        }).addCase(fetchGrade_Retension_rate_Chart.pending, (state, action) => {
            state.Grade_Retension_rate_Chartloading = true;
        })


        builder.addCase(fetchEnrollment_Dimension_View.fulfilled, (state, action) => {
            state.Enrollment_Dimension_View = action.payload;
            state.Enrollment_Dimension_Viewloading = false;
        }).addCase(fetchEnrollment_Dimension_View.pending, (state, action) => {
            state.Enrollment_Dimension_Viewloading = true;
        })


        builder.addCase(fetchEnrollment_Trend_View.fulfilled, (state, action) => {
            state.Enrollment_Trend_View = action.payload;
            state.Enrollment_Trend_Viewloading = false;
        }).addCase(fetchEnrollment_Trend_View.pending, (state, action) => {
            state.Enrollment_Trend_Viewloading = true;
        })

        builder.addCase(fetchGrade_Ethnicity_Spread.fulfilled, (state, action) => {
            state.Grade_Ethnicity_Spread = action.payload;
            state.Grade_Ethnicity_Spreadloading = false;
        }).addCase(fetchGrade_Ethnicity_Spread.pending, (state, action) => {
            state.Grade_Ethnicity_Spreadloading = true;
        })

        builder.addCase(fetchSpecial_Group_Spread.fulfilled, (state, action) => {
            state.Special_Group_Spread = action.payload;
            state.Special_Group_Spreadloading = false;
        }).addCase(fetchSpecial_Group_Spread.pending, (state, action) => {
            state.Special_Group_Spreadloading = true;
        })

        builder.addCase(fetchStudentsbyGrade.fulfilled, (state, action) => {
            state.StudentsbyGrade = action.payload;
            state.StudentsbyGradeloading = false;
        }).addCase(fetchStudentsbyGrade.pending, (state, action) => {
            state.StudentsbyGradeloading = true;
        })

        builder.addCase(fetchStudent_Retatining_Over_Years.fulfilled, (state, action) => {
            state.Student_Retatining_Over_Years = action.payload;
            state.Student_Retatining_Over_Yearsloading = false;
        }).addCase(fetchStudent_Retatining_Over_Years.pending, (state, action) => {
            state.Student_Retatining_Over_Yearsloading = true;
        })

        builder.addCase(fetchStudent_Spending_Cross_Dimension_View.fulfilled, (state, action) => {
            state.Student_Spending_Cross_Dimension_View = action.payload;
            state.Student_Spending_Cross_Dimension_Viewloading = false;
        }).addCase(fetchStudent_Spending_Cross_Dimension_View.pending, (state, action) => {
            state.Student_Spending_Cross_Dimension_Viewloading = true;
        })


        builder.addCase(fetchStudentSpendingtimeInDistrict.fulfilled, (state, action) => {
            state.StudentSpendingtimeInDistrict = action.payload;
            state.StudentSpendingtimeInDistrictloading = false;
        }).addCase(fetchStudentSpendingtimeInDistrict.pending, (state, action) => {
            state.StudentSpendingtimeInDistrictloading = true;
        })

        builder.addCase(fetchStudentSpendingStudentsGroup.fulfilled, (state, action) => {
            state.StudentSpendingStudentsGroup = action.payload;
            state.StudentSpendingStudentsGrouploading = false;
        }).addCase(fetchStudentSpendingStudentsGroup.pending, (state, action) => {
            state.StudentSpendingStudentsGrouploading = true;
        })

        builder.addCase(fetchStudent_Spending_Trend_Chart.fulfilled, (state, action) => {
            state.Student_Spending_Trend_Chart = action.payload;
            state.Student_Spending_Trend_Chartloading = false;
        }).addCase(fetchStudent_Spending_Trend_Chart.pending, (state, action) => {
            state.Student_Spending_Trend_Chartloading = true;
        })
    }
})


export default Overview.reducer