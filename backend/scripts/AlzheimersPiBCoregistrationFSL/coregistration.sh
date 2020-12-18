#!/bin/bash

#Michael Ranasinghe
#09/26/2020

# -------------

# We've heavily commented this code for you. Feel free to ignore it should you already have an understanding.

#FSL is an open source library of neuroimage library tools for MRI, FMRI brain imaging data.
#If you have not already installed FSL onto your desktop, please visit https://fsl.fmrib.ox.ac.uk/fsl/fslwiki/FslInstallation.

#This script will coregister the PET frames to a reference image. In our example, the reference is taken to be the MRI image.
#Linear registration is performed to align PET frames in better placement with the MR.

# To correctly perform a registration procedure, it is typical to calculate a mean PET image prior to applying registration. 
# Essentially, if you have a PET image with multiple frames, you calculate the average value of all frames to obtain a PET image with a single frame. 
# Then apply the registration technique.

# -------------


# First, we're going to make some variables.
# PETfilename is the corresponding PET image file name.
# MRfilename is the corresponding MR image file name.

PETfilename="AD01_50_70_PiB_PET.nii"
MRfilename="AD01_MR.nii"
meanPET="meanPET.nii"


# As mentioned, we are going to need to calculate an average PET image. 
# This is very simple to do in FSL. We will utilize FSL's math set of tools

# Notice, here the input image is the variable "PETfilename". 
# The generated output mean image is the variable "meanPET"
# Unfortunately, in fslmaths, there are no parameter specifiers (ie -in, -out, etc)


fslmaths $PETfilename -Tmean $meanPET

# We've assigned the software to be flirt. As you'll see in other demos available in the web app, there
# are other softwares that can be obtained from the FSL library. 
# FNIRT, MCFLIRT are to name a few.

software="flirt" 

# RegisteredPETname is the output PET file 
RegisteredPETname="RegisteredPETtoMR.nii"


# FSL is a command line operated software
# The general format is the following: software (flirt,fnirt,etc), reference image, input image, output image, additional optional features based on software used

# In our example notice the following:
# 		(1) to indicate a reference image we use "-ref" followed by the reference image name. 
#		(2) Similar can be seen for "-in", "-out" for input, output images, respectively

# This is a common syntax style to take I/O arguments in FSL, and in most command line driven software

$software -ref $MRfilename -in $meanPET -out $RegisteredPETname -omat $registeredPETname'.txt' -dof 6

