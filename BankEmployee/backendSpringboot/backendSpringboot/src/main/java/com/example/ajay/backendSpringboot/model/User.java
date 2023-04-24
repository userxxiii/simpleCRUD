package com.example.ajay.backendSpringboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class User {
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Id
    @GeneratedValue
    private Long id;

    private String email;



    private String name;



    private String gender;
    private Date birthday;
    private String age;
    private String withdrawalLimit;
    private String bankBalance;
    private String accountType;
    private String idno;

    public String getIdno() {
        return idno;
    }

    public void setIdno(String idno) {
        this.idno = idno;
    }

    private Date openDate;
    private String status;



    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public Date getOpenDate() {
        return openDate;
    }

    public void setOpenDate(Date openDate) {
        this.openDate = openDate;
    }

    public String getStatus() {
        return status;
    }

    public String getWithdrawalLimit() {
        return withdrawalLimit;
    }

    public void setWithdrawalLimit(String withdrawalLimit) {
        this.withdrawalLimit = withdrawalLimit;
    }

    public String getBankBalance() {
        return bankBalance;
    }

    public void setBankBalance(String bankBalance) {
        this.bankBalance = bankBalance;
    }

    public void setStatus(String status) {
        this.status = status;
    }






    public String getGender() {
        return gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthday() {
        return birthday;
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
