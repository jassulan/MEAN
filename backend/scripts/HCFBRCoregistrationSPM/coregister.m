% List of open inputs
nrun = X; % enter the number of runs here
jobfile = {'./coregister_job.m'};
jobs = repmat(jobfile, 1, nrun);
inputs = cell(0, nrun);
for crun = 1:nrun
end
spm('defaults', 'PET');
spm_jobman('serial', jobs, '', inputs{:});
