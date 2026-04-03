from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    email: EmailStr
    role: str | None = None

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(UserBase):
    id: int

    class Config:
        from_attributes = True
