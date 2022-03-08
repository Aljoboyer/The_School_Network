import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

//Teacher getting all request from student
export const GetExtraCareRequest = createAsyncThunk(
    "Teacher/getExtraCareRequest",
    async (teacherclass) => {
        const response = await fetch(
            `https://blooming-citadel-14218.herokuapp.com/requestCare?teacherclass=${teacherclass}`
        ).then((res) => res.json());
        return response;
    }
);

// Publish notice from teachers
export const noticePublishFromTeacher = createAsyncThunk(
    "Teacher/PublishNotice",
    async (data) => {
        const response = await fetch(
            "https://blooming-citadel-14218.herokuapp.com/PublishNotice",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .catch((error) => {
                Swal.fire("!", "Error!", "error");
            });
        return response;
    }
);

// Get the current teacher
export const getTeacherInfo = createAsyncThunk(
    "Teacher/TeacherProfile",
    async (email) => {
        const response = await fetch(
            `https://blooming-citadel-14218.herokuapp.com/TeacherProfile?email=${email}`
        ).then((res) => res.json());
        return response;
    }
);

// Update profile picture
export const updateTeacherDP = createAsyncThunk(
    "Teacher/UpdateTeacherDP",
    async (data) => {
        console.log("Hitted", data);
        const response = await fetch(
            `https://blooming-citadel-14218.herokuapp.com/UpdateTeacherDP?email=${data.email}`,
            {
                method: "PUT",
                body: data.fd,
            }
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);

// Add teachers information
export const addTeacherInfo = createAsyncThunk(
    "Teacher/AddTeacherInfo",
    async (data) => {
        const response = await fetch(
            `https://blooming-citadel-14218.herokuapp.com/AddTeacherInfo?email=${data.email}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .catch((err) => console.log(err));
        return response;
    }
);

//Result Publish For Student
export const PublishResult = createAsyncThunk(
    "Teacher/PublishResult",
    async (data) => {
        console.log("hitted result", data);
        const response = await fetch(
            "https://blooming-citadel-14218.herokuapp.com/PublishResult",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((res) => res.json())
            .catch((error) => {
                Swal.fire("!", "Error!", "error");
            });
        return response;
    }
);

//Get Individual Care of Student
export const GetIndividualCare = createAsyncThunk(
    "Teacher/GetIndividualCare",
    async (id) => {
        const response = await fetch(
            `https://blooming-citadel-14218.herokuapp.com/GetIndividualCare/${id}`
        )
            .then((res) => res.json())
            .catch((error) => {
                Swal.fire("!", "Error!", "error");
            });
        return response;
    }
);

// Upload class routine
export const UploadClassRoutine = createAsyncThunk(
    "Teacher/UploadClassRoutine",
    async (data) => {
        const response = await fetch(
            `http://localhost:5000/UploadClassRoutine?class=${data.classRoutineData.class}&&section=${data.classRoutineData.section}`,
            {
                method: "POST",
                body: data.fd,
            }
        );
        return response;
    }
);

// Upload Exam Routine
export const UploadExamRoutine = createAsyncThunk(
    "Teacher/UploadExamRoutine",
    async (data) => {
        const response = await fetch(
            `http://localhost:5000/UploadExamRoutine?class=${data.class}&&term=${data.term}`,
            {
                method: "POST",
                body: data.fd,
            }
        );
        return response;
    }
);

// Get All Class Routines
export const GetClassRoutine = createAsyncThunk(
    "Teacher/GetClassRoutine",
    async () => {
        const response = await fetch(
            "http://localhost:5000/GetClassRoutine"
        ).then((res) => res.json());
        return response;
    }
);

// Get All Exam Routines
export const GetExamRoutine = createAsyncThunk(
    "Teacher/GetExamRoutine",
    async () => {
        const response = await fetch(
            "http://localhost:5000/GetExamRoutine"
        ).then((res) => res.json());
        return response;
    }
);

// Delete A Class Routine
export const DeleteClassRoutine = createAsyncThunk(
    "Teacher/DeleteClassRoutine",
    async (data) => {
        const response = await fetch(
            `http://localhost:5000/DeleteClassRoutine?id=${data}`,
            {
                method: "DELETE",
            }
        );
        return response;
    }
);

// Delete A Exam Routine
export const DeleteExamRoutine = createAsyncThunk(
    "Teacher/DeleteExamRoutine",
    async (id) => {
        const response = await fetch(
            `http://localhost:5000/DeleteExamRoutine?id=${id}`,
            {
                method: "DELETE",
            }
        );
        return response;
    }
);

const initialState = {
    value: 0,
    extraCares: [],
    teacherInfo: {},
    IndividualCare: {},
    classRoutines: [],
    examRoutines: [],
};

export const TeacherReducer = createSlice({
    name: "Teacher",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(GetExtraCareRequest.fulfilled, (state, action) => {
            state.extraCares = action.payload;
        });
        builder.addCase(noticePublishFromTeacher.fulfilled, (state, action) => {
            Swal.fire("Success", "Notice Published Successfully", "success");
        });
        builder.addCase(getTeacherInfo.fulfilled, (state, action) => {
            state.teacherInfo = action.payload;
        });
        builder.addCase(updateTeacherDP.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Profile Picture Updated Successfully",
                "success"
            );
        });
        builder.addCase(addTeacherInfo.fulfilled, (state, action) => {
            Swal.fire("Success", "Information Updated Successfully", "success");
        });
        builder.addCase(PublishResult.fulfilled, (state, action) => {
            Swal.fire("Success", "Result Publish Success", "success");
        });
        builder.addCase(GetIndividualCare.fulfilled, (state, action) => {
            state.IndividualCare = action.payload;
        });
        builder.addCase(UploadClassRoutine.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Class routine uploaded successfully",
                "success"
            );
        });
        builder.addCase(UploadExamRoutine.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Class routine uploaded successfully",
                "success"
            );
        });
        builder.addCase(GetClassRoutine.fulfilled, (state, action) => {
            state.classRoutines = action.payload;
        });
        builder.addCase(GetExamRoutine.fulfilled, (state, action) => {
            state.examRoutines = action.payload;
        });
        builder.addCase(DeleteClassRoutine.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Class Routine deleted successfully",
                "success"
            );
        });
        builder.addCase(DeleteExamRoutine.fulfilled, (state, action) => {
            Swal.fire(
                "Success",
                "Class Routine deleted successfully",
                "success"
            );
        });
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
    TeacherReducer.actions;

export default TeacherReducer.reducer;
